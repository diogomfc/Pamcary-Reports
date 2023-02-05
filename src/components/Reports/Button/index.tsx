import { CaretRight } from 'phosphor-react'
import React, { ComponentProps } from 'react'
import { Container, Button } from './styles'

export interface ButtonProps extends ComponentProps<typeof Button> {
  TextTitle: string
  Icon?: React.ReactNode
}

export function ButtonReport({
  TextTitle,
  Icon,
  ...props
}: ButtonProps) {
  return (
    <Container>
      <Button {...props}>
        <div>{Icon}</div>
        <span>{TextTitle}</span>
        <div><CaretRight size={32} /></div>
      </Button>
    </Container>
  )
}

