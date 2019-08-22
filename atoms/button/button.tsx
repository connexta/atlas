import * as React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import styled from 'styled-components'

export const WrappedButton = styled(
  React.forwardRef((props: ButtonProps, ref: React.Ref<any>) => {
    return <Button {...props} ref={ref} />
  })
)<ButtonProps>``
