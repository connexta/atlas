import * as React from 'react'
import { storiesOf } from '@connexta/ace/@storybook/react'
import { CreateCard } from './'
import styled from 'styled-components'

const stories = storiesOf('Components | Card', module)

const Wrapper = styled.div`
  width: 20%;
`

stories.add('Create Card', () => (
  <Wrapper>
    <CreateCard text="Add Card" />
  </Wrapper>
))
