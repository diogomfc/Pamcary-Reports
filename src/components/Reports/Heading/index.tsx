import { Container } from "./styles";

interface HeadingProps {
  Title: string;
  Subtitle: string;
}

export function Heading({ Title, Subtitle }: HeadingProps) {
  return (
    <Container>
      <h1>{Title}</h1>
      <h2>{Subtitle}</h2>
    </Container>
  );
}