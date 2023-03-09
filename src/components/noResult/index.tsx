import Image from "next/image";
import { Container } from "./styles";

export function NoResults() {
  return (
    <>
      <Container>
        <div>
          <Image
            src="/img/ImgAlertaResult.svg"
            alt="Alerta"
            width={152}
            height={139}
          />
        </div>
        <p>Nenhum resultado por aqui...</p>
        <div>
          <h1>Navegue pelo menu superior</h1>
        </div>
        <span>
          Caso tenha duvidas de como gerar um relatório, clique no botão de
          ajuda.
        </span>
      </Container>
    </>
  );
}
