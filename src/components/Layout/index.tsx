import React from 'react'
import { Header } from '@components/Header'
import { Container, Content } from './styles'
import { SidebarSteps } from '@components/Siderbar/index';
import { StepItem } from '@components/Siderbar/Steps';
import { Checks, HourglassSimpleMedium } from 'phosphor-react';

interface ContainerProps {
  children: React.ReactNode
}

export function Layout({ children }: ContainerProps) {
  return (
    <>
      <Header />
      <Container>
         <SidebarSteps>
          {/* Status: Formalização, Neutro, Concluído, Análise, Correção */}
          <StepItem 
            path="/register/1_CaracteristicaSinistro/"
            title="Característica do Sinistro"
            numberIcon="1"
            status="Formalização"
          />
           <StepItem 
            path="/register/#/"
            title="Segurado"
            numberIcon="2"
            status="Formalização"
          />
            <StepItem 
            path="/register/#/"
            title="Cronologia do sinistro"
            numberIcon="3"
            status="Correção"
          />
           <StepItem 
            path="/register/#/"
            title="Do carregamento"
            numberIcon="4"
            status="Neutro"
          />
            <StepItem 
            path="/register/#/"
            title="Motorista"
            numberIcon="5"
            status="Formalização"
          />
          <StepItem 
            path="/register/#/"
            title="Ajudantes"
            numberIcon="6"
            status="Neutro"
          />
            <StepItem 
            path="/register/#/"
            title="Veículo transportador"
            numberIcon="7"
            status="Neutro"
          />
           <StepItem 
            path="/register/#/"
            title="Órgão policial"
            numberIcon="8"
            status="Neutro"
          />
            <StepItem 
            path="/register/#/"
            title="Gerenciamento de risco – veículo"
            numberIcon="9"
            status="Neutro"
          />
            <StepItem 
            path="/register/#/"
            title="Dos sistemas protecionais do carregamento"
            numberIcon="10"
            status="Neutro"
          />
          <StepItem 
            path="/register/#/"
            title="Declaração do motorista e ajudante (s)"
            numberIcon="11"
            status="Neutro"
          />
            <StepItem 
            path="/register/#/"
            title="Gerenciamento de risco – depósito"
            numberIcon="12"
            status="Neutro"
          />
           <StepItem 
            path="/register/#/"
            title="Dos locais do evento"
            numberIcon="13"
            status="Correção"
          />
            <StepItem 
            path="/register/#/"
            title="Das averiguações"
            numberIcon="14"
            status="Neutro"
          />
                <StepItem 
            path="/register/#/"
            title="Recuperação da carga"
            numberIcon="15"
            status="Neutro"
          />
          <StepItem 
            path="/register/#/"
            title="Anexos fotográficos"
            numberIcon="16"
            status="Neutro"
          />
            <StepItem 
            path="/register/#/"
            title="Conclusão"
            numberIcon="17"
            status="Neutro"
          />
           <StepItem 
            path="/register/#/"
            title="Em análise"
            numberIcon={<HourglassSimpleMedium size={16} />}
            status="Disabled"
          />
            <StepItem 
            path="/register/#/"
            title="Emitir relatório"
            numberIcon={<Checks size={16} />}
            status="Disabled"
          />
         </SidebarSteps>
        <Content>{children}</Content>
      </Container>
    </>
  )
}
