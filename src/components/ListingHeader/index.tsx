import { Container, Heading } from "./styles";

interface IContainerHeaderProps {
  title: string;
  subTitle: string;
}

export function ListingHeader({ title, subTitle}: IContainerHeaderProps) {
  return (
    <Container>
      <Heading>
        <h1>{title}</h1>
        <div></div>
        <h3>{subTitle}</h3>
      </Heading>
    </Container>
  );
}