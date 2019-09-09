import * as React from 'react'
import Select, { SelectProps } from '@material-ui/core/Select'
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem'
import styled from 'styled-components'
import { OutlinedInput, InputLabel } from './'

export const WrappedSelect = styled(
  React.forwardRef((props: SelectProps, ref: React.Ref<any>) => {
    return <Select {...props} ref={ref} />
  })
)<SelectProps>``

export const WrappedMenuItem = styled(
  React.forwardRef((props: MenuItemProps, ref: React.Ref<any>) => {
    //@ts-ignore
    return <MenuItem {...props} ref={ref} />
  })
)<MenuItemProps>``

export const OutlinedSelect = styled(
  React.forwardRef(
    (props: SelectProps & { label: string }, ref: React.Ref<any>) => {
      const inputLabelRef = React.useRef<any>(null)
      const [labelWidth, setLabelWidth] = React.useState(0)

      React.useEffect(() => {
        setLabelWidth(inputLabelRef.current!.offsetWidth)
      }, [])

      return (
        <>
          <InputLabel ref={inputLabelRef}>{props.label}</InputLabel>
          <Select
            {...props}
            input={<OutlinedInput labelWidth={labelWidth} />}
            ref={ref}
          >
            {props.children}
          </Select>
        </>
      )
    }
  )
)<SelectProps & { label: string }>``
