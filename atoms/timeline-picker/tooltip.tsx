import * as React from 'react'
import styled from '../../styled'

const Root = styled.div`
  position: absolute;
  top: ${(props: any) => props.pos.y}px;
  left: ${(props: any) => props.pos.x}px;
  color: white;
  /* opacity: 0.5; */
  /* background-color: black; */
  background-color: rgba(0, 0, 0, 0.3);
  max-height: 150px;
  width: 150px;
  border-radius: 8px;
  padding: 10px;
`

const Message = styled.span`
  /* opacity: 1 !important; */
`

export const Tooltip = (props: any) => {
  const { x, y, message } = props
  return (
    <Root pos={{ x, y }}>
      <Message>{message}</Message>
    </Root>
  )
}
