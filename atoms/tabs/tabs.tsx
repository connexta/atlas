import * as React from 'react'
import Tabs, { TabsProps } from '@material-ui/core/Tabs'
import Tab, { TabProps } from '@material-ui/core/Tab'
import styled from 'styled-components'

export const WrappedTabs = styled(
  React.forwardRef((props: TabsProps, ref: React.Ref<any>) => {
    return <Tabs {...props} ref={ref} />
  })
)<TabsProps>``

export const WrappedTab = styled(
  React.forwardRef((props: TabProps, ref: React.Ref<any>) => {
    return <Tab {...props} ref={ref} />
  })
)<TabProps>``
