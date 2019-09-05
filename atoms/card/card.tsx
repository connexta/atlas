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
  React.forwardRef((props: CardHeaderProps, ref) => {
    return <CardHeader {...props} ref={(ref as unknown) as undefined} />
  })
)<CardHeaderProps>``

export const WrappedCard = styled(
  React.forwardRef((props: CardProps, ref) => {
    return <Card {...props} ref={(ref as unknown) as undefined} />
  })
)<CardProps>``

export const WrappedCardActions = styled(
  React.forwardRef((props: CardActionsProps, ref) => {
    return <CardActions {...props} ref={(ref as unknown) as undefined} />
  })
)<CardActionsProps>``

export const WrappedCardContent = styled(
  React.forwardRef((props: CardContentProps, ref) => {
    return <CardContent {...props} ref={(ref as unknown) as undefined} />
  })
)<CardContentProps>``

export const WrappedCardContentLabel = styled(
  React.forwardRef((props: TypographyProps, ref) => {
    return <Typography {...props} ref={(ref as unknown) as undefined} noWrap />
  })
)<TypographyProps>`
  && {
    opacity: 0.6;
  }
`

export const WrappedCardContentValue = styled(
  React.forwardRef((props: TypographyProps, ref) => {
    return <Typography {...props} ref={(ref as unknown) as undefined} noWrap />
  })
)<TypographyProps>``

export const WrappedCardActionArea = styled(
  React.forwardRef((props: CardActionAreaProps, ref: React.Ref<any>) => {
    // @ts-ignore
    return <CardActionArea {...props} buttonref={ref} />
  })
)<CardActionAreaProps>``

type CreateCardProps = {
  text: string
  cardProps: CardProps
}

export const CreateCard = styled(
  React.forwardRef((props: CreateCardProps, ref) => {
    return (
      <WrappedCard {...props.cardProps} ref={(ref as unknown) as undefined}>
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
