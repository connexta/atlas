import * as React from 'react'
import Grid, { GridProps } from '@material-ui/core/Grid'
import styled from 'styled-components'

export const WrappedGrid = styled(
  React.forwardRef((props: GridProps, ref) => {
    return <Grid {...props} ref={(ref as unknown) as undefined} />
  })
)<GridProps>``

const GridItem = styled(WrappedGrid)`
  > * {
    height: 100%;
  }
`

type CardGridProps = {
  gridProps?: GridProps
  gridItemProps?: GridProps
  children?: React.ReactNode
}

export const WrappedCardGrid = styled(
  ({ gridProps, gridItemProps, children }: CardGridProps) => {
    return (
      // @ts-ignore
      <WrappedGrid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        {...gridProps}
      >
        {React.Children.map(children, child => {
          return (
            // @ts-ignore
            <GridItem
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              {...gridItemProps}
              // @ts-ignore
              key={child.key}
            >
              {child}
            </GridItem>
          )
        })}
      </WrappedGrid>
    )
  }
)<CardGridProps>``
