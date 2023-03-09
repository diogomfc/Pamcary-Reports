import { Container, Title, ResumoReport, ResumoReportItem } from "./styles";

interface HeaderProps {
  title: string;
  n_processo: string;
  cliente: string;
  status_relatorio: string;
  data_inicio_relatorio: string;
  data_prevista_termino_relatorio: string;
  relatorio_criado_por: string;
  supervisor_responsavel: string;
  statusIcon: string | JSX.Element;
}

//STATUS: 'Formalizando' | 'Revisando' | 'Aprovado' | 'Emitido' | 'Cancelado'

export function HeaderReport({
  title,
  n_processo,
  cliente,
  status_relatorio,
  data_inicio_relatorio,
  data_prevista_termino_relatorio,
  relatorio_criado_por,
  supervisor_responsavel,
  statusIcon,
}: HeaderProps): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>
      <ResumoReport>
        <ResumoReportItem>
          <h2>Processo nº</h2>
          <span>{n_processo}</span>
        </ResumoReportItem>
        <ResumoReportItem>
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
        </ResumoReportItem>
        <ResumoReportItem>
          <h2>Cliente / Segurado</h2>
          <span>{cliente}</span>
        </ResumoReportItem>
        <ResumoReportItem>
          <h2>Data início</h2>
          <span className="ResumoData">{data_inicio_relatorio}</span>
        </ResumoReportItem>
        <ResumoReportItem>
          <h2>Data término</h2>
          <span className="ResumoData">{data_prevista_termino_relatorio}</span>
        </ResumoReportItem>
        <ResumoReportItem>
          <h2>Responsável</h2>
          <span>{relatorio_criado_por}</span>
        </ResumoReportItem>
        <ResumoReportItem>
          <h2>Gestor</h2>
          <span>{supervisor_responsavel}</span>
        </ResumoReportItem>
      </ResumoReport>
    </Container>
  );
}
