type Action = {
  url: string
  title: string
  description: string
  auth: string
}

type Props = {
  url?: string
  actions?: Action[]
}

function waitForIframe(ms = 0) {
  return new Promise(r => setTimeout(r, ms))
}

const processActions = async ({ actions }: { actions: Action[] }) => {
  if (actions.length == 1) {
    window.location.href = actions[0].url
  } else {
    var iframeUrl: string
    var logoutUrl: string

    // Execute the IdP logout in an iFrame and display the basic/default logout message
    if (actions[0].title === 'Local Logout') {
      iframeUrl = actions[1].url
      logoutUrl = actions[0].url
    } else {
      iframeUrl = actions[0].url
      logoutUrl = actions[1].url
    }

    var iframe = document.createElement('iframe')
    iframe.name = 'logoutFrame'
    iframe.src = iframeUrl
    document.body.appendChild(iframe)

    // Wait 3 seconds for iframe logout
    await waitForIframe(3000)
    window.location.href = logoutUrl
  }
}

const logout = ({ url, actions }: Props) => {
  if (actions !== undefined) {
    processActions({ actions })
  } else if (url !== undefined) {
    fetch(url)
      .then(res => res.json())
      .then(actions => {
        processActions({ actions })
      })
  } else {
    throw 'Actions or url are required.'
  }
}

export default logout
