import * as React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab, { TabProps } from '@material-ui/core/Tab'
import styled from 'styled-components'

export const WrappedTabs = Tabs

export const WrappedTab = styled(
  React.forwardRef((props: TabProps, ref: React.Ref<any>) => {
    return <Tab {...props} ref={ref} />
  })
)<TabProps>`` as React.ComponentType<TabProps>
