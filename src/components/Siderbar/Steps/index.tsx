/* eslint-disable no-undef */
import Link from 'next/link'
import { useState } from 'react'
import { Container, Content } from './styles'

interface StepsProps {
  title: string
  numberIcon: string | JSX.Element
  status: 'Neutro' | 'Concluído' | 'Formalização' | 'Análise' | 'Correção' | 'Disabled'
  path: string
}

export function StepItem({
  title,
  status,
  numberIcon,
  path,
}: StepsProps): JSX.Element {

  return (
    <Container>
      <Link href={path}>
        <Content>
          <div id={status}>
            <div className="CircleStepNeutro">
              <div className="CircleStep">
                <span>{numberIcon}</span>
              </div>
            </div>
            <div className="TitleStep">
              <h1>{title}</h1>
            </div>
          </div>
        </Content>
      </Link>
    </Container>
  )
}
