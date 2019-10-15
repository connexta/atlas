import { storiesOf as of } from '@connexta/ace/@storybook/react'

import { withTheme } from './theme-decorator'

export const storiesOf = (name: string, m: NodeModule) => {
  const stories = of(name, m)
  stories.addDecorator(withTheme as any)
  return stories
}
