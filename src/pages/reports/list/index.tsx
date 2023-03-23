import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Header } from "@components/Header";
import { NoResults } from "@components/noResult";

import { SelectInput } from "@components/Reports/SelectInput";
import { ButtonReport } from "@components/Reports/Button";
import { ItemList } from "@components/Reports/ItemList";
import { ListingHeader } from "@components/Reports/ListingHeader";
import { SearchInput } from "@components/Reports/SearchInput";
import { Card } from "@components/Reports/Card";

import { usePaginationReports } from "@hooks/usePaginationReports";
import { useOnSnapshotAllReports } from "@hooks/useFirebase/useOnSnapshotAllReports";
import { useOnSnapshotUserId } from "@hooks/useFirebase/useOnSnapshotUserId";
import { useDeleteReportsId } from "@hooks/useFirebase/useDeleteReportsId";
import { useSearchReport } from "@hooks/useSearchReport";

import { PDFDownloadLink, View } from "@react-pdf/renderer";

import { IReportsV2 } from "src/@types/typesReport";

import { Funnel, MagnifyingGlass } from "phosphor-react";

//import { Toaster, toast } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Content,
  Heading,
  Pesquisa,
  List,
  ContentList,
  PaginateStyle,
  Status,
  N_Processo,
  Data,
  Responsavel,
  Manager,
  Cliente,
  Acoes,
  Listagem,
  Pagination,
} from "./styles";

export default function ReportList() {
  const router = useRouter();

  //Hook para pegar todos os reports com filtro por perfil do usuário
  const { allReportsSnapshot } = useOnSnapshotAllReports();
  const { userProfile } = useOnSnapshotUserId();

  //Paginação
  const { pageCount, changePage, pagesVisited, usersPerPage } =
    usePaginationReports(allReportsSnapshot);

  //localizar o ultimo step preenchido
  function TotalCountStep(n_processo: string) {
    const report = allReportsSnapshot.find(
      (report) => report.id === n_processo
    );
    const step1 = report?.step1_Cliente_Segurado?.n_step;
    const step2 = report?.step2_Caracteristica_Sinistro?.n_step;
    const step3 = report?.step3_Cronologia_Sinistro?.n_step;
    const step4 = report?.step4_Carregamento?.n_step;
    const step5 = report?.step5_Motorista?.n_step;
    const step6 = report?.step6_Ajudantes?.n_step;
    const step7 = report?.step7_Veiculo_Transportador?.n_step;
    const step8 = report?.step8_Orgao_Policial?.n_step;
    const step9 = report?.step9_Gerenciamento_Risco?.n_step;
    const step10 = report?.step10_Sistema_Protecionais_Carregamento?.n_step;
    const step11 = report?.step11_Declaracao_Motorista_Ajudante?.n_step;
    const step12 = report?.step12_Gerenciamento_Risco_Deposito?.n_step;
    const step13 = report?.step13_Locais_do_Evento?.n_step;
    const step14 = report?.step14_Resumo_Averiguacoes?.n_step;
    const step15 = report?.step15_Recuperacao_Carga?.n_step;
    const step16 = report?.step16_Anexos_Fotograficos?.n_step;
    const step17 = report?.step17_Conclusao?.n_step;

    const arrayStep = [
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
      step8,
      step9,
      step10,
      step11,
      step12,
      step13,
      step14,
      step15,
      step16,
      step17,
    ];

    const arrayStepFiltrado = arrayStep.filter((step) => step !== undefined);
    const totalStep = arrayStepFiltrado.length;

    return totalStep;
  }

  //função para direcionar para a página de registro do step 1
  function stepsReport(id: string) {
    console.log(id);

    TotalCountStep(id) === 0 &&
      router.push(`/reports/register/steps/step1_Cliente_Segurado/${id}`);
    TotalCountStep(id) === 1 &&
      router.push(
        `/reports/register/steps/step2_Caracteristica_Sinistro/${id}`
      );
    TotalCountStep(id) === 2 &&
      router.push(
        `/reports/register/steps/step2_Caracteristica_Sinistro/${id}`
      );
    TotalCountStep(id) === 3 &&
      router.push(
        `/reports/register/steps/step2_Caracteristica_Sinistro/${id}`
      );
    TotalCountStep(id) === 4 && console.log("step 5");
    TotalCountStep(id) === 5 && console.log("step 6");
    TotalCountStep(id) === 6 && console.log("step 7");
    TotalCountStep(id) === 7 && console.log("step 8");
    TotalCountStep(id) === 8 && console.log("step 9");
    TotalCountStep(id) === 9 && console.log("step 10");
    TotalCountStep(id) === 10 && console.log("step 11");
    TotalCountStep(id) === 11 && console.log("step 12");
    TotalCountStep(id) === 12 && console.log("step 13");
    TotalCountStep(id) === 13 && console.log("step 14");
    TotalCountStep(id) === 14 && console.log("step 15");
    TotalCountStep(id) === 15 && console.log("step 16");
    TotalCountStep(id) === 16 && console.log("step 17");
    TotalCountStep(id) === 17 &&
      router.push(
        `/reports/register/steps/step2_Caracteristica_Sinistro/${id}`
      );
    //TotalCountStep(id) === 17 && console.log("step 17");;
  }

  //Redirecionar para página de report
  function Report(id: string) {
    router.push(`/reports/report/${id}`);
  }

  //função para direcionar para a página de update do step 1
  function stepsUpdateReport(id: string, update: string) {
    console.log(`${id}${update}`);
    router.push(
      `/reports/register/steps/step1_Cliente_Segurado/${id}${update}`
    );
  }

  //Deletar report por id quando o usuário form admin ou supervisor
  async function deleteReportID(id: string) {
    if (
      userProfile[0]?.perfil === "Admin" ||
      userProfile[0]?.perfil === "Supervisor"
    ) {
      useDeleteReportsId(id);
      toast.success("Relatório excluído com sucesso!", {
        className: "ToastSuccess",
      });
      console.log("Permissão concedida!");
    } else {
      toast.info(
        "Você não tem permissão para excluir relatórios! Entre em contato com o Administrador ou Supervisor responsável",
        {
          className: "ToastInfo",
        }
      );
    }
  }

  //Direcionar para página de gerar pdf
  function generatePDF(id: string) {
    router.push(`/reports/pdf/${id}`);
  }

  //Localizar relatório por nome do cliente através do input
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<IReportsV2[]>([]);
  const [buscando, setBuscando] = useState(false);

  const searchReport = (event: any) => {
    event.preventDefault();
    const palavra = event.target.value;

    if (palavra.length > 0) {
      setBuscando(true);
    }

    if (palavra.length === 0) {
      setBuscando(false);
    }

    setSearch(event.target.value);

    const results = allReportsSnapshot.filter((report) =>
      report.cliente.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(results);

    // if (results.length === 0) {
    //   toast.info("Nenhum relatório encontrado", {
    //     className: "ToastInfo",
    //   });
    // }
  };

  return (
    <>
      <Header />
      <Container>
        <ToastContainer position="top-center" />
        {allReportsSnapshot.length > 0 ? (
          <>
            <Content>
              <Heading>
                <ListingHeader
                  title="Relatórios"
                  subTitle="Lista relatórios de averiguação"
                />
              </Heading>

              <Pesquisa>
                <div className="InputPesquisa">
                  <div
                    style={{
                      width: "450px",
                      padding: "10px 0 10px 0",
                    }}
                  >
                    <SearchInput
                      prefix={<MagnifyingGlass size={32} />}
                      type="text"
                      placeholder="Pesquisar por nome do cliente"
                      value={search}
                      onChange={searchReport}
                      // onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="ContentCard">
                  <Card
                    //borderColor="#0078BE"
                    totalColor="#0078BE"
                    borderColor="#E1E1E6"
                    icon="/img/IconCardFormalizando.svg"
                    title="Formalizando"
                    total={
                      allReportsSnapshot.filter(
                        (report) => report.status === "Formalizando"
                      ).length
                    }
                  />
                  <Card
                    totalColor="#2ECC71"
                    borderColor="#E1E1E6"
                    icon="/img/IconCardConcluido.svg"
                    title="Concluídos"
                    total={
                      allReportsSnapshot.filter(
                        (report) => report.status === "Concluído"
                      ).length
                    }
                  />
                  <Card
                    totalColor="#FFA807"
                    borderColor="#E1E1E6"
                    icon="/img/IconCardRevisando.svg"
                    title="Revisando"
                    total={
                      allReportsSnapshot.filter(
                        (report) => report.status === "Revisando"
                      ).length
                    }
                  />
                  <Card
                    totalColor="#2ECC71"
                    borderColor="#E1E1E6"
                    icon="/img/IconCardEmitido.svg"
                    title="Emitidos"
                    total={
                      allReportsSnapshot.filter(
                        (report) => report.status === "Emitido"
                      ).length
                    }
                  />
                  <Card
                    totalColor="#F84F6B"
                    borderColor="#E1E1E6"
                    icon="/img/IconCardCorrecao.svg"
                    title="Correção"
                    total={
                      allReportsSnapshot.filter(
                        (report) => report.status === "Correção"
                      ).length
                    }
                  />
                </div>
              </Pesquisa>

              <List>
                <ContentList className="main-content-result active">
                  <Status
                    onClick={() => {
                      console.log("Filro por status");
                    }}
                  >
                    <h2>
                      STATUS <Funnel size={12} />{" "}
                    </h2>
                  </Status>
                  <N_Processo>
                    <h2>
                      Nº PROCESSO <Funnel size={12} />
                    </h2>
                  </N_Processo>
                  <Data>
                    <h2>
                      DATA <Funnel size={12} />
                    </h2>
                  </Data>
                  <Responsavel>
                    <h2>
                      RESPONSÁVEL <Funnel size={12} />
                    </h2>
                  </Responsavel>
                  <Manager>
                    <h2>
                      SUPERVISOR <Funnel size={12} />
                    </h2>
                  </Manager>
                  <Cliente>
                    <h2>
                      CLIENTE <Funnel size={12} />
                    </h2>
                  </Cliente>
                  <Acoes>
                    <h2>AÇÕES</h2>
                  </Acoes>
                  <Listagem>
                    {buscando
                      ? searchResults
                          .slice(pagesVisited, pagesVisited + usersPerPage)
                          .sort((a, b) => {
                            return (
                              new Date(b.created_in).getTime() -
                              new Date(a.created_in).getTime()
                            );
                          })
                          .map((report) => {
                            return (
                              <ItemList
                                key={report.id}
                                tagColor={
                                  report.status === "Formalizando"
                                    ? "#0078BE"
                                    : report.status === "Aprovado"
                                    ? "#2ECC71"
                                    : report.status === "Emitido"
                                    ? "#2ECC71"
                                    : report.status === "Revisando"
                                    ? "#FFA807"
                                    : report.status === "Cancelado"
                                    ? "#86061b"
                                    : "#F84F6B"
                                }
                                status={report.status}
                                n_Processo={report.id}
                                created_at_getTime={
                                  //converte em data e hora no formato brasileiro
                                  new Date(report.created_in).toLocaleString(
                                    "pt-BR",
                                    { timeZone: "UTC" }
                                  )
                                }
                                created_at={new Date(
                                  report.created_in
                                ).toLocaleDateString("pt-BR", {
                                  timeZone: "UTC",
                                })}
                                responsavel={report.user.name}
                                supervisor={report.manager}
                                segurado={report.cliente}
                                n_step={TotalCountStep(report.id)}
                                //TotalCountStep(report.n_processo)
                                titleN_step={`Etapa ${TotalCountStep(
                                  report.id
                                )} de 18`}
                                qtdCommit={5}
                                stepsReport={() => Report(report.id)}
                                deleteReport={() => deleteReportID(report.id)}
                                linkCommit={() => {}}
                                resumoReport={() => generatePDF(report.id)}
                              />
                            );
                          })
                      : allReportsSnapshot
                          .slice(pagesVisited, pagesVisited + usersPerPage)
                          .sort((a, b) => {
                            return (
                              new Date(b.created_in).getTime() -
                              new Date(a.created_in).getTime()
                            );
                          })
                          .map((report) => {
                            return (
                              <ItemList
                                key={report.id}
                                tagColor={
                                  report.status === "Formalizando"
                                    ? "#0078BE"
                                    : report.status === "Aprovado"
                                    ? "#2ECC71"
                                    : report.status === "Emitido"
                                    ? "#2ECC71"
                                    : report.status === "Revisando"
                                    ? "#FFA807"
                                    : report.status === "Cancelado"
                                    ? "#86061b"
                                    : "#F84F6B"
                                }
                                status={report.status}
                                n_Processo={report.id}
                                created_at_getTime={
                                  //converte em data e hora no formato brasileiro
                                  new Date(report.created_in).toLocaleString(
                                    "pt-BR",
                                    { timeZone: "UTC" }
                                  )
                                }
                                created_at={new Date(
                                  report.created_in
                                ).toLocaleDateString("pt-BR", {
                                  timeZone: "UTC",
                                })}
                                responsavel={report.user.name}
                                supervisor={report.manager}
                                segurado={report.cliente}
                                n_step={TotalCountStep(report.id)}
                                //TotalCountStep(report.n_processo)
                                titleN_step={`Etapa ${TotalCountStep(
                                  report.id
                                )} de 18`}
                                qtdCommit={5}
                                stepsReport={() => Report(report.id)}
                                deleteReport={() => deleteReportID(report.id)}
                                linkCommit={() => {}}
                                resumoReport={() => generatePDF(report.id)}
                              />
                            );
                          })}
                  </Listagem>
                  <Pagination>
                    <PaginateStyle
                      previousLabel={"Anterior"}
                      nextLabel={"Próximo"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                    />
                    <div>
                      <h1>
                        Total:{" "}
                        <span>
                          {buscando
                            ? searchResults.length
                            : allReportsSnapshot.length}
                        </span>
                      </h1>
                    </div>
                  </Pagination>
                </ContentList>
              </List>
            </Content>
          </>
        ) : (
          <NoResults />
        )}
      </Container>
    </>
  );
}
