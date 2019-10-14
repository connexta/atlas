/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/

const url = require('url')
const qs = require('querystring')

type Options = {
  headers?: object
  [key: string]: unknown
}

const fetch = window.fetch

const cacheBust = (urlString: string) => {
  const { query, ...rest } = url.parse(urlString)
  return url.format({
    ...rest,
    search: '?' + qs.stringify({ ...qs.parse(query), _: Date.now() }),
  })
}

export default function(url: string, { headers, ...opts }: Options = {}) {
  return fetch(cacheBust(url), {
    credentials: 'same-origin',
    cache: 'no-cache',
    ...opts,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      ...headers,
    },
  })
}
