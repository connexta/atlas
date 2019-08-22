import * as React from 'react'
import Typography, { TypographyProps } from '@material-ui/core/Typography'
import styled from 'styled-components'

export const WrappedTypography = styled(
  React.forwardRef((props: TypographyProps, ref: React.Ref<any>) => {
    return <Typography {...props} ref={ref} />
  })
)<TypographyProps>``
