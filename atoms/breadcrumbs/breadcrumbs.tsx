import * as React from 'react'
import Breadcrumbs, { BreadcrumbsProps } from '@material-ui/core/Breadcrumbs'

import styled from 'styled-components'

export const WrappedBreadcrumbs = styled(
  React.forwardRef((props: BreadcrumbsProps, ref: React.Ref<any>) => {
    return <Breadcrumbs {...props} ref={ref} />
  })
)<BreadcrumbsProps>`` as React.ComponentType<BreadcrumbsProps>
