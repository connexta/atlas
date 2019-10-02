import * as React from 'react'
import Radio, { RadioProps } from '@material-ui/core/Radio'
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup'
import styled from 'styled-components'

export const WrappedRadio = styled(
  React.forwardRef((props: RadioProps, ref: React.Ref<any>) => {
    return <Radio {...props} ref={ref} />
  })
)<RadioProps>`` as React.ComponentType<RadioProps>

export const WrappedRadioGroup = styled(
  React.forwardRef((props: RadioGroupProps, ref: React.Ref<any>) => {
    return <RadioGroup {...props} ref={ref} />
  })
)<RadioGroupProps>`` as React.ComponentType<RadioGroupProps>
