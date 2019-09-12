import * as React from 'react'
import Link, { LinkProps } from '@material-ui/core/Link'
import styled from 'styled-components'

export const WrappedLink = styled(
  React.forwardRef((props: LinkProps, ref: React.Ref<any>) => {
    return <Link {...props} ref={ref} />
  })
)<LinkProps>``
