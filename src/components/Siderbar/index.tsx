import {
  Container,
  HeaderTitle,
  Title,
  StepsReport,
  LineMultiSteps,
} from "./styles";
import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
}

export function SidebarSteps({ children }: SidebarProps) {
  return (
    <Container>
      <HeaderTitle>
        <Title>CONFIRA OS PRÓXIMOS PASSOS</Title>
      </HeaderTitle>
      <StepsReport>
        <LineMultiSteps>{children}</LineMultiSteps>
      </StepsReport>
    </Container>
  );
}
