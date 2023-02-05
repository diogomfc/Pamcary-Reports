import { Container, Guias, Label, LineGuia } from "./styles";

interface GuiaFromProps {
  Title: string
}

export function GuiaForm({Title}: GuiaFromProps) {
  return (
    <Container>
      <Label>
        {Title}
      </Label>
      <Guias/>
      <LineGuia />
    </Container>
  );
}
