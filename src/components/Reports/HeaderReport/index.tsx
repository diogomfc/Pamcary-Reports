import { Container, Title, ResumoReport, ResumoReportItem } from './styles'

interface HeaderProps {
  processNumber: string
  reportStatus: string
  reportDate: string
  responsible: string
  manager: string
}

export function HeaderReport({
  processNumber,
  reportStatus,
  reportDate,
  responsible,
  manager,
}: HeaderProps) {
  return (
    <Container>
      <Title>Relatório de averiguação</Title>
      <ResumoReport>
        <ResumoReportItem>
          <h2>Processo nº</h2>
          <span>{processNumber}</span>
        </ResumoReportItem>
        <ResumoReportItem>
          <h2>Status Relatório</h2>
          <span>{reportStatus}</span>
        </ResumoReportItem>
        <ResumoReportItem>
          <h2>Data Relatório</h2>
          <span>{reportDate}</span>
        </ResumoReportItem>
        <ResumoReportItem>
          <h2>Responsável</h2>
          <span>{responsible}</span>
        </ResumoReportItem>
        <ResumoReportItem>
          <h2>Gestor</h2>
          <span>{manager}</span>
        </ResumoReportItem>
      </ResumoReport>
    </Container>
  )
}
