import { CaretRight } from 'phosphor-react'
import React, { ComponentProps } from 'react'
import { Container, Button } from './styles'

export interface ButtonProps extends ComponentProps<typeof Button> {
  TextTitle: string
  IconRight?: string | JSX.Element
  IconLeft?: string | JSX.Element
}

export function ButtonReport({
  TextTitle,
  IconLeft,
  IconRight,
  ...props
}: ButtonProps) {
  return (
    <Container>
      <Button {...props}>
      {!!IconLeft && <div>{IconLeft}</div>}
        <span>{TextTitle}</span>
      {!!IconRight && <div>{IconRight}</div>}
      </Button>
    </Container>
  )
}

