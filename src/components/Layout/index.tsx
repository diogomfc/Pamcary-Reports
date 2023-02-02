import React from 'react'
import { Header } from '@components/Header'
import { Container, Content } from './styles'

interface ContainerProps {
  children: React.ReactNode
}

export function Layout({ children }: ContainerProps) {
  return (
    <>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  )
}
