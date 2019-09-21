import * as React from 'react'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import styled from 'styled-components'

export const WrappedCheckbox = styled(
  React.forwardRef((props: CheckboxProps, ref: React.Ref<any>) => {
    return <Checkbox {...props} ref={ref} />
  })
)<CheckboxProps>`` as React.ComponentType<CheckboxProps>
