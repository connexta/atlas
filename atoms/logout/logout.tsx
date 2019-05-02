type Action = {
  url: string
  title: string
  description: string
  auth: string
}

function waitForIframe(ms = 0) {
  return new Promise(r => setTimeout(r, ms))
}

const basicLogoutUrl = ({ actions }: { actions: Action[] }): Action => {
  // The basic logout page is the one that will be displayed at the end
  const action = actions.find(action => action.title === 'Local Logout')

  if (action === undefined) {
    return actions[0]
  }
  return action
}

const logout = async ({ actions }: { actions: Action[] }) => {
  if (actions.length == 1) {
    window.location.href = actions[0].url
  } else {
    var logoutUrl = basicLogoutUrl({ actions }).url

    for (let action of actions) {
      if (action.url !== logoutUrl) {
        var iframe = document.createElement('iframe')
        iframe.src = action.url
        document.body.appendChild(iframe)

        // Wait 3 seconds for iframe logout
        await waitForIframe(3000)
      }
    }

    window.location.href = logoutUrl
  }
}

export default logout
