import React from 'react'
import { Header } from '@components/Header'

import { Container, Content } from './styles'
import { SidebarSteps } from '@components/Siderbar'


interface ContainerProps {
  children: React.ReactNode,
}

export function Layout({ children }: ContainerProps) {
  return (
    <>
      <Header />
      <Container>
        <SidebarSteps />
        <Content>{children}</Content>
      </Container>
    </>
  )
}
