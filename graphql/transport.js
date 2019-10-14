const fetch = require('isomorphic-fetch')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
const Client = require('rpc-websockets').Client

const { write } = require('./cql')

const getCql = ({ filterTree, cql }) => {
  if (filterTree !== undefined) {
    return '(' + write(filterTree) + ')'
  }
  return cql
}

const processQuery = ({ filterTree, cql, ...query }) => {
  const cqlString = getCql({ filterTree, cql })
  return JSON.stringify({ cql: cqlString, ...query })
}

const handleError = (code, data) => {
  let e = null

  try {
    const json = typeof data === 'string' ? JSON.parse(data) : data
    const message = json.message || 'Unknown error'
    const error = Error(`${code}: ${message}`)
    error.data = json
    e = error
  } catch (_) {
    e = Error(data)
  }

  e.code = code
  throw e
}

const createHttpTransport = opts => {
  const { protocol, hostname, port, pathname } = opts

  const url = `${protocol}//${hostname}:${port}${pathname}/cql`

  const send = query => {
    const controller = new AbortController()

    const response = fetch(url, {
      headers: opts.headers,
      method: 'POST',
      signal: controller.signal,
      body: processQuery(query),
      ...opts.httpOpts,
    })

    const abort = () => controller.abort()

    const json = async () => {
      const res = await response

      if (!res.ok) {
        handleError(res.status, await res.text())
      }

      return res.json()
    }

    return { json, abort }
  }

  const close = () => {}

  return { send, close }
}

const createWsTransport = opts => {
  const { protocol, hostname, port, pathname } = opts

  const wsProtocol = { 'http:': 'ws:', 'https:': 'wss:' }
  const url = `${wsProtocol[protocol]}//${hostname}:${port}${pathname}ws`

  const rpc = new Promise((resolve, reject) => {
    const client = new Client(url, {
      headers: opts.headers,
      ...opts.wsOpts,
    })
    client.on('error', reject)
    client.on('open', () => {
      resolve(client)
    })
  })

  rpc.catch(() => {})

  const send = async query => {
    const client = await rpc

    try {
      return await client.call('query', [processQuery(query)])
    } catch (e) {
      handleError(e.code, e)
    }
  }

  const close = async () => {
    const client = await rpc
    client.close()
  }

  return { send, close }
}

const defaultOptions = {
  protocol: 'https:',
  hostname: 'localhost',
  port: 8993,
  pathname: '/search/catalog/',
}

const modes = {
  ws: createWsTransport,
  http: createHttpTransport,
}

exports.createTransport = (opts = {}) => {
  const options = { ...defaultOptions, ...window.location, ...opts }
  const { type = 'http', hostname } = options

  const auth = Buffer.from('admin:admin').toString('base64')

  const headers = {
    'User-Agent': 'ace',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Basic ${auth}`,
    'Content-Type': 'application/json',
    Referer: `https://${hostname}:8993`,
  }

  const f = modes[type]

  if (typeof f !== 'function') {
    throw new Error(`Unsupport transport type '${type}'.`)
  }

  return f({ headers, ...options })
}
