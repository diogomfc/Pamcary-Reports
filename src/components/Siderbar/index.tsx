
import {
  Container,
  HeaderTitle,
  Title,
  StepsReport,
  LineMultiSteps,
} from "./styles";

interface SidebarStepsProps {
  children: React.ReactNode;
}

export function SidebarSteps({ children }: SidebarStepsProps) {

  return (
    <Container>
      <HeaderTitle>
        <Title>CONFIRA OS PRÓXIMOS PASSOS</Title>
      </HeaderTitle>
      <StepsReport>
        <LineMultiSteps>
           {children}
        </LineMultiSteps>
      </StepsReport>
    </Container>
  );
}


