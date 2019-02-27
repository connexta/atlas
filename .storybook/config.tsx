// import * as React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
// import Theme from '../atoms/theme'

const themes = [
  {
    name: 'dark',
    theme: 'dark',
  },
  {
    name: 'light',
    theme: 'light',
  },
]
addDecorator(withInfo({ inline: true }))
addDecorator(withThemesProvider(themes))

// const CenterDecorator = (story: any) => {
//   return <Theme>{story()}</Theme>
// }
// addDecorator(CenterDecorator)

// automatically import all files ending in *.stories.tsx
const req = require.context('../', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
