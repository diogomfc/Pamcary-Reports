import Image from "next/image";
import { CalendarCheck } from "phosphor-react";
import { Container, Title, Content } from "./styles";

interface HeaderProps {
  title: string;
  n_processo: string;
  //cliente: string;
  status_relatorio: string;
  data_inicio_relatorio: string;
  //data_prevista_termino_relatorio: string;
  relatorio_criado_por: string;
  revisado_por: string;
  supervisor_responsavel: string;
  statusIcon: string | JSX.Element;
}

//STATUS: 'Formalizando' | 'Revisando' | 'Aprovado' | 'Emitido' | 'Cancelado'

export function HeaderReport({
  title,
  n_processo,
  //cliente,
  status_relatorio,
  data_inicio_relatorio,
  //data_prevista_termino_relatorio,
  relatorio_criado_por,
  revisado_por,
  supervisor_responsavel,
  statusIcon,
}: HeaderProps): JSX.Element {
  return (
    <Container>
      <Title>
      <Image src="/img/IconClienteCadastrado.svg" alt="Icon Cadastro cliente" width={35} height={35} />
        {title}
      </Title>
      <Content>
        <div className="item">
          <h2>Processo nº</h2>
          <span>{n_processo}</span>
        </div>
        <div className="item">
          <h2>Status Relatório</h2>
          <div id={status_relatorio}>
            <div className="CircleStepNeutro">
              <div className="CircleStep">
                <span>{statusIcon}</span>
              </div>
            </div>
            <div className="TitleStep">
              <h1>{status_relatorio}</h1>
            </div>
          </div>
        </div>
        <div className="item">
          <h2>Início</h2>
          <div className="data">
            <CalendarCheck size={20} color="#323238" />
            <span>{data_inicio_relatorio}</span>
          </div>
        </div>
        <div className="item">
          <h2>Analista Responsável</h2>
          <span>{relatorio_criado_por}</span>
        </div>
        <div className="item">
          <h2>Analista de revisão</h2>
          <span>{revisado_por}</span>
        </div>
        <div className="item">
          <h2>Gestor Responsável</h2>
          <span>{supervisor_responsavel}</span>
        </div>
      </Content>
    </Container>
  );
}
