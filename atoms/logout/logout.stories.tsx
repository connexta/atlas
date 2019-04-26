import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import logout from './logout'
import Button from '../button'

const Actions = [
  {
    url:
      'https://localhost:8993/services/saml/logout/request?EncryptedNameIdTime=ATbP%2FB9q677j6i%2FfmRQn0qtT4GjbsAYCoSNvbU4tVnbkns6NMQUACzbQ%2FJBl5wTl9jwU3w%3D%3D',
    auth: '',
    description: '',
    title: '',
  },
  {
    url: 'https://localhost:8993/logout/local',
    auth: '',
    description: '',
    title: '',
  },
]

storiesOf('Logout', module)
  .addDecorator(withKnobs)
  .add('playground', () => {
    return (
      <Button
        onClick={() => {
          logout({ actions: Actions })
        }}
      >
        Logout!
      </Button>
    )
  })
