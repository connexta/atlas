import * as React from 'react'
import Radio, { RadioProps } from '@material-ui/core/Radio'
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup'
import styled from 'styled-components'

export const WrappedRadio = styled(
  React.forwardRef((props: RadioProps, ref) => {
    return <Radio {...props} ref={(ref as unknown) as undefined} />
  })
)<RadioProps>``

export const WrappedRadioGroup = styled(
  React.forwardRef((props: RadioGroupProps, ref) => {
    return <RadioGroup {...props} ref={(ref as unknown) as undefined} />
  })
)<RadioGroupProps>``
