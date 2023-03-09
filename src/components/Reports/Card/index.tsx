import Image from "next/image";
import { Container, Content } from "./styles";

interface CardProps {
  title: string;
  total: number;
  children?: React.ReactNode;
  icon: string;
  borderColor: string;
}

export function Card({ title, total, icon, borderColor}: CardProps) {
  return (
    <Container 
      borderColor={borderColor}
    >
      <Content borderColor={borderColor}>
        <Image width={66} height={66} src={icon} alt="Icon" />
        <div>
          <span>{title}</span>
          <h1>{total}</h1>
        </div>
      </Content>
    </Container>
  );
}
