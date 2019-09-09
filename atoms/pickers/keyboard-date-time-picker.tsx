import * as React from 'react'
import {
  KeyboardDateTimePicker,
  KeyboardDateTimePickerProps,
} from '@material-ui/pickers'
import styled from 'styled-components'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

const _KeyboardDateTimePicker = styled(KeyboardDateTimePicker)`
  .MuiInputBase-adornedEnd {
    padding-right: 0px;
  }
`

export const WrappedKeyboardDateTimePicker = styled(
  React.forwardRef(
    (props: KeyboardDateTimePickerProps, ref: React.Ref<any>) => {
      return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <_KeyboardDateTimePicker {...props} ref={ref} />
        </MuiPickersUtilsProvider>
      )
    }
  )
)<KeyboardDateTimePickerProps>``
