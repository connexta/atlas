import * as React from 'react'
import Card, { CardProps } from '@material-ui/core/Card'
import CardHeader, { CardHeaderProps } from '@material-ui/core/CardHeader'
import CardActions, { CardActionsProps } from '@material-ui/core/CardActions'
import CardContent, { CardContentProps } from '@material-ui/core/CardContent'
import CardActionArea, {
  CardActionAreaProps,
} from '@material-ui/core/CardActionArea'
import Typography, { TypographyProps } from '@material-ui/core/Typography'
import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/AddBox'

export const WrappedHeader = styled(
  React.forwardRef((props: CardHeaderProps, ref: React.Ref<any>) => {
    return <CardHeader {...props} ref={ref} />
  })
)<CardHeaderProps>``

export const WrappedCard = styled(
  React.forwardRef((props: CardProps, ref: React.Ref<any>) => {
    return <Card {...props} ref={ref} />
  })
)<CardProps>``

export const WrappedCardActions = styled(
  React.forwardRef((props: CardActionsProps, ref: React.Ref<any>) => {
    return <CardActions {...props} ref={ref} />
  })
)<CardActionsProps>``

export const WrappedCardContent = styled(
  React.forwardRef((props: CardContentProps, ref: React.Ref<any>) => {
    return <CardContent {...props} ref={ref} />
  })
)<CardContentProps>``

export const WrappedCardContentLabel = styled(
  React.forwardRef((props: TypographyProps, ref: React.Ref<any>) => {
    return <Typography {...props} ref={ref} noWrap />
  })
)<TypographyProps>`
  && {
    opacity: 0.6;
  }
`

export const WrappedCardContentValue = styled(
  React.forwardRef((props: TypographyProps, ref: React.Ref<any>) => {
    return <Typography {...props} ref={ref} noWrap />
  })
)<TypographyProps>``

export const WrappedCardActionArea = styled(
  React.forwardRef((props: CardActionAreaProps, ref: React.Ref<any>) => {
    return <CardActionArea {...props} buttonRef={ref} />
  })
)<CardActionAreaProps>``

type CreateCardProps = {
  text: string
  cardProps?: CardProps
}

export const CreateCard = styled(
  React.forwardRef((props: CreateCardProps, ref: React.Ref<any>) => {
    return (
      <WrappedCard {...props.cardProps} ref={ref}>
        <WrappedCardActionArea
          style={{
            height: '100%',
            textAlign: 'center',
          }}
        >
          <WrappedCardContent>
            <CreateIcon
              style={{
                fontSize: '7rem',
              }}
            />
            <h1>{props.text}</h1>
          </WrappedCardContent>
        </WrappedCardActionArea>
      </WrappedCard>
    )
  })
)<CreateCardProps>``
