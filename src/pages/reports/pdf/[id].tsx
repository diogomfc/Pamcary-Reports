import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Bell } from "phosphor-react";
import ReactPDF, {
  Document,
  Font,
  Page,
  Text,
  StyleSheet,
  PDFDownloadLink,
  Image,
  PDFViewer,
  Defs,
  Svg,
  ClipPath,
  Rect as RectSVG,
  Circle,
  View,
  G,
} from "@react-pdf/renderer";

import { useOnSnapshotReportsId } from "@hooks/useFirebase/useOnSnapshotReportsId";
import { Header } from "@components/Header";

import { Container, Content, BoxContentSteps } from "./styles";

import PdfHeaderReport from "@components/Pdf/Header";
import PdfHeadingReport from "@components/Pdf/Heading";
import TextContainer from "@components/Pdf/TextContainer";
import BoxStep from "@components/Pdf/steps/boxStep";
import { CheckBoxSelected, CheckBoxTitle } from "@components/Pdf/CheckBox";
import ImageBox from "@components/Pdf/ImageBox";
import TextArea from "@components/Pdf/TextArea";

export default function PDF() {
  const router = useRouter();
  const { id } = router.query;
  const reportId = id as string;

  // const Br = () => "\n";

  const { snapshotReportsID } = useOnSnapshotReportsId(reportId);

  // const ResumoAveriguacoes =  snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.resumo_averiguacoes?.replaceAll('\\n', '\r \n\n')

  // const TextResumo_averiguacoes = ResumoAveriguacoes?.split("\r \n\n").map((item, key) => {
  //   return <Text key={key}>{item}</Text>;
  // });


  const ResumoAveriguacoes =  snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.resumo_averiguacoes?.replaceAll('\\n', '\n\n')

  const TextResumo_averiguacoes = ResumoAveriguacoes?.split("\r \n\n").map((item, key) => {
    return <Text key={key}>{item}</Text>;
  });

  const ResumoConclusoes =  snapshotReportsID[0]?.step17_Conclusao?.conclusao?.replaceAll('\\n', '\n\n')

  const TextResumo_conclusoes = ResumoConclusoes?.split("\r \n\n").map((item, key) => {
    return <Text key={key}>{item}</Text>;
  });




  console.log(TextResumo_averiguacoes);



  //mostrar texto do banco de dados formatado com quebra de linha
  // const TextResumo_averiguacoes =
  //   snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.resumo_averiguacoes
  //     ?.split("\\n")
  //     .map((item, key) => {
  //       return <Text key={key}>{item}</Text>;
  //     });

  
  // console.log(TextResumo_averiguacoes);




  return (
    <>
      <Header />

      <Container>
        <PDFViewer style={Content.pdfViewer}>
          <Document>
            <Page style={Content.body} size="A4">
              <PdfHeaderReport />
              <PdfHeadingReport TextStatus="NÃO RECUPERADO:">
                <TextContainer
                  widthContainer="20%"
                  Title="Nº PROCESSO"
                  ColorTextName="#1A75CF"
                  FontSize={12}
                  TextName={snapshotReportsID[0]?.id}
                />
                <TextContainer
                  widthContainer="60%"
                  Title="CLIENTE / SEGURADO"
                  TextName={snapshotReportsID[0]?.cliente}
                />
                <TextContainer
                  widthContainer="20%"
                  Title="DATA INÍCIO"
                  TextName={snapshotReportsID[0]?.created_in}
                />
                <TextContainer
                  widthContainer="20%"
                  Title="DATA TÉRMINO"
                  TextName={snapshotReportsID[0]?.finished_in}
                />
              </PdfHeadingReport>

      {/* 1- SEGURADO */}
              <BoxStep Title="1- SEGURADO">
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer="80%"
                    Title="NOME"
                    TextName={snapshotReportsID[0]?.cliente}
                  />
                  <TextContainer
                    widthContainer="40%"
                    Title="CNPJ"
                    TextName={
                      snapshotReportsID[0]?.step1_Cliente_Segurado?.cnpj
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer="60%"
                    Title="ENDEREÇO"
                    TextName={
                      snapshotReportsID[0]?.step1_Cliente_Segurado?.endereco
                    }
                  />
                  <TextContainer
                    widthContainer="20%"
                    Title="BAIRRO"
                    TextName={
                      snapshotReportsID[0]?.step1_Cliente_Segurado?.bairro
                    }
                  />
                  <TextContainer
                    widthContainer="20%"
                    Title="MUNICÍPIO"
                    TextName={
                      snapshotReportsID[0]?.step1_Cliente_Segurado?.cidade
                    }
                  />
                  <TextContainer
                    widthContainer="20%"
                    Title="UF"
                    TextName={
                      snapshotReportsID[0]?.step1_Cliente_Segurado?.estado
                    }
                  />
                </View>
              </BoxStep>

      {/* 2 - CARACTERÍSTICA DO SINISTRO */}
              <BoxStep Title="2 - CARACTERÍSTICA DO SINISTRO">
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer="80%"
                    Title="SEGURADORA"
                    TextName={
                      snapshotReportsID[0]?.step2_Caracteristica_Sinistro
                        ?.seguradora
                    }
                  />
                  <TextContainer
                    widthContainer="40%"
                    Title="NATUREZA DO EVENTO"
                    TextName={
                      snapshotReportsID[0]?.step2_Caracteristica_Sinistro
                        ?.natureza_do_evento
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer="80%"
                    Title="CARGA EMBARCADA"
                    TextName={
                      snapshotReportsID[0]?.step2_Caracteristica_Sinistro
                        ?.carga_embarcada
                    }
                  />
                  <TextContainer
                    widthContainer="40%"
                    Title="VALOR DA CARGA"
                    TextName={
                      snapshotReportsID[0]?.step2_Caracteristica_Sinistro
                        ?.valor_da_carga
                    }
                  />
                </View>
              </BoxStep>

      {/* 3 - CRONOLOGIA DO SINISTRO */}
              <BoxStep Title="3 - CRONOLOGIA DO SINISTRO">
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="LOCAL DO SINISTRO - ENDEREÇO"
                    TextName={
                      snapshotReportsID[0]?.step3_Cronologia_Sinistro
                        ?.local_sinistro
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="MUNICÍPIO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="UF"
                    TextName="Add DB"
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={186} // 2
                    Title="COMUNICANTE"
                    TextName={
                      snapshotReportsID[0]?.step3_Cronologia_Sinistro
                        ?.local_sinistro
                    }
                  />
                  <TextContainer
                    widthContainer={186} // 2
                    Title="DATA/HORA COMUNICAÇÃO NA CIA."
                    TextName={
                      snapshotReportsID[0]?.step3_Cronologia_Sinistro
                        ?.data_hora_comunicacao_cia
                    }
                  />
                  <TextContainer
                    widthContainer={186} // 2
                    Title="DATA/HORA DO SINISTRO"
                    TextName={
                      snapshotReportsID[0]?.step3_Cronologia_Sinistro
                        ?.data_hora_sinistro
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={186} // 2
                    Title="DATA/HORA ACIONAMENTO DO AGENTE"
                    TextName={
                      snapshotReportsID[0]?.step3_Cronologia_Sinistro
                        ?.data_hora_acionamento_agente
                    }
                  />
                  <TextContainer
                    widthContainer={186} // 2
                    Title="DATA/HORA CHEGADA AO LOCAL."
                    TextName={
                      snapshotReportsID[0]?.step3_Cronologia_Sinistro
                        ?.data_hora_chegada_agente
                    }
                  />
                </View>
              </BoxStep>

      {/* 4 - DO CARREGAMENTO */}
              <BoxStep Title="4 - DO CARREGAMENTO">
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={474} // 5
                    Title="TRANSPORTADOR(ES)"
                    TextName={
                      snapshotReportsID[0]?.step4_Carregamento?.transportador
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="VALOR EMBARCADO"
                    TextName={
                      snapshotReportsID[0]?.step4_Carregamento?.valor_embarcado
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="ORIGEM  - ENDEREÇO"
                    TextName={
                      snapshotReportsID[0]?.step4_Carregamento?.origem_cidade_uf
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="MUNICÍPIO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="UF"
                    TextName="Add DB"
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="DESTINO - ENDEREÇO"
                    TextName={
                      snapshotReportsID[0]?.step4_Carregamento
                        ?.destino_cidade_uf
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="MUNICÍPIO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="UF"
                    TextName="Add DB"
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="REMETENTE"
                    TextName={
                      snapshotReportsID[0]?.step4_Carregamento?.remetente
                    }
                  />
                  <TextContainer
                    widthContainer={284} // 3
                    Title="DESTINATÁRIO"
                    TextName={
                      snapshotReportsID[0]?.step4_Carregamento?.destinatario
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={186} // 2
                    Title="CRTC(S) DACTE(S)"
                    TextName={
                      snapshotReportsID[0]?.step4_Carregamento?.crtc_dacte
                    }
                  />
                  <TextContainer
                    widthContainer={186} // 2
                    Title="NOTAS FISCAIS"
                    TextName={
                      snapshotReportsID[0]?.step4_Carregamento?.nota_fiscal
                    }
                  />
                  <TextContainer
                    widthContainer={186} // 2
                    Title="MANIFESTO"
                    TextName={
                      snapshotReportsID[0]?.step4_Carregamento?.manifesto
                    }
                  />
                </View>
              </BoxStep>

          {/* Break para próxima pagina fixo */}
              <View
                style={{
                  fontSize: 5,

                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10,

                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                break
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    RELATÓRIO DE AVERIGUAÇÃO -{" "}
                  </Text>
                  <Text style={{ color: "#7C7C8A" }}>Nº PROCESSO: </Text>
                  <Text>{snapshotReportsID[0]?.id}</Text>
                  <Text style={{ color: "#7C7C8A", marginLeft: 5 }}>
                    CLIENTE / SEGURADO:{" "}
                  </Text>
                  <Text>{snapshotReportsID[0]?.cliente} </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    DATA-HORA DE EMISSÃO:{" "}
                  </Text>
                  <Text>
                    {" "}
                    {new Date().toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }) +
                      " - " +
                      new Date().toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                  </Text>
                </View>
              </View>

      {/* 5 - MOTORISTA */}
              <BoxStep Title="5 - MOTORISTA">
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={280} // 5
                    Title="NOME"
                    TextName={snapshotReportsID[0]?.step5_Motorista?.nome}
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="DATA NASCIMENTO"
                    TextName={
                      snapshotReportsID[0]?.step5_Motorista?.data_nascimento
                    }
                  />
                  <TextContainer
                    widthContainer={186} // 3
                    Title="LOCAL NASCIMENTO"
                    TextName={
                      snapshotReportsID[0]?.step5_Motorista?.local_nascimento
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="ENDEREÇO"
                    TextName={snapshotReportsID[0]?.step5_Motorista?.endereco}
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="MUNICÍPIO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="UF"
                    TextName="Add DB"
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={93} // 3
                    Title="TELEFONE"
                    TextName={snapshotReportsID[0]?.step5_Motorista?.telefone}
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="VINCULO"
                    TextName={snapshotReportsID[0]?.step5_Motorista?.vinculo}
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="CPF"
                    TextName={snapshotReportsID[0]?.step5_Motorista?.cpf}
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="Nº CNH "
                    TextName={snapshotReportsID[0]?.step5_Motorista?.cnh}
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="CATEGORIA CNH"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="VALIDADE CNH"
                    TextName={
                      snapshotReportsID[0]?.step5_Motorista?.validade_cnh
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <View style={BoxContentSteps.Column}>
                    <TextContainer
                      widthContainer={92} // 3
                      Title="CONSULTA"
                      TextName={
                        snapshotReportsID[0]?.step5_Motorista
                          ?.consulta_motorista
                      }
                    />
                    <TextContainer
                      widthContainer={92} // 3
                      Title="Nº DA CONSULTA"
                      TextName={
                        snapshotReportsID[0]?.step5_Motorista
                          ?.n_consulta_motorista
                      }
                    />
                    <TextContainer
                      widthContainer={92} // 3
                      Title="DATA DA CONSULTA"
                      TextName={
                        snapshotReportsID[0]?.step5_Motorista
                          ?.consulta_motorista
                      }
                    />
                  </View>
                  <View style={BoxContentSteps.Row}>
                    <TextContainer
                      //widthContainer={530} // 3
                      Title="TELERISCO – SITUAÇÃO DO MOTORISTA"
                      TextName={
                        snapshotReportsID[0]?.step5_Motorista
                          ?.telerisco_situacao_motorista
                      }
                    />
                  </View>
                </View>
              </BoxStep>

      {/* 6 - AJUDANTES */}
              <BoxStep Title="6 - AJUDANTES">
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284}
                    Title="NOME 1º AJUDANTE"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1.nome
                    }
                  />
                  <TextContainer
                    widthContainer={92}
                    Title="DATA NASCIMENTO"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1
                        .data_nascimento
                    }
                  />
                  <TextContainer
                    widthContainer={186}
                    Title="LOCAL NASCIMENTO"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1
                        .local_nascimento
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="ENDEREÇO"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1.endereco
                    }
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="MUNICÍPIO"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1.cidade
                    }
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="UF"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1.estado
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={93} // 3
                    Title="TELEFONE"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1?.telefone
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="VINCULO"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1?.vinculo
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="CPF"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1?.cpf
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="Nº CNH "
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1?.cnh
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="CATEGORIA CNH"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="VALIDADE CNH"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante1
                        ?.validade_cnh
                    }
                  />
                </View>

                <View style={BoxContentSteps.Line} />

                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284}
                    Title="NOME 2º AJUDANTE"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2.nome
                    }
                  />
                  <TextContainer
                    widthContainer={92}
                    Title="DATA NASCIMENTO"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2
                        .data_nascimento
                    }
                  />
                  <TextContainer
                    widthContainer={186}
                    Title="LOCAL NASCIMENTO"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2
                        .local_nascimento
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="ENDEREÇO"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2.endereco
                    }
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="MUNICÍPIO"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2.cidade
                    }
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="UF"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2.estado
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={93} // 3
                    Title="TELEFONE"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2?.telefone
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="VINCULO"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2?.vinculo
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="CPF"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2?.cpf
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="Nº CNH "
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2?.cnh
                    }
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="CATEGORIA CNH"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="VALIDADE CNH"
                    TextName={
                      snapshotReportsID[0]?.step6_Ajudantes?.ajudante2
                        ?.validade_cnh
                    }
                  />
                </View>
              </BoxStep>

      {/* 7 – VEÍCULO TRANSPORTADOR */}
              <BoxStep Title="7 – VEÍCULO TRANSPORTADOR">
                <View style={[BoxContentSteps.Row, { gap: -1 }]}>
                  <View
                    style={[
                      BoxContentSteps.BoxLine,
                      {
                        alignItems: "center",
                        width: 92,
                        height: 78,
                        justifyContent: "center",
                        borderRight: "none",
                      },
                    ]}
                  >
                    <Image
                      src={"/img/ImgCavaloMecânico.jpg"}
                      style={{ width: "52px" }}
                    />
                  </View>
                  <View style={BoxContentSteps.BoxLine}>
                    <View
                      style={[
                        BoxContentSteps.Column,
                        { padding: 2, justifyContent: "center" },
                      ]}
                    >
                      <View
                        style={[BoxContentSteps.Row, { paddingBottom: -3 }]}
                      >
                        <TextContainer
                          widthContainer={92}
                          Title="PLACA"
                          TextName={
                            snapshotReportsID[0]?.step7_Veiculo_Transportador
                              ?.cavalo_mecanico?.placa
                          }
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="MARCA"
                          TextName={
                            snapshotReportsID[0]?.step7_Veiculo_Transportador
                              ?.cavalo_mecanico?.marca
                          }
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="MODELO"
                          TextName={
                            snapshotReportsID[0]?.step7_Veiculo_Transportador
                              ?.cavalo_mecanico?.modelo
                          }
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="COR"
                          TextName={
                            snapshotReportsID[0]?.step7_Veiculo_Transportador
                              ?.cavalo_mecanico?.cor
                          }
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="ANO"
                          TextName={
                            snapshotReportsID[0]?.step7_Veiculo_Transportador
                              ?.cavalo_mecanico?.ano_modelo
                          }
                        />
                      </View>
                      <View
                        style={[BoxContentSteps.Row, { paddingBottom: -3 }]}
                      >
                        <TextContainer
                          widthContainer={186}
                          Title="PROPRIETÁRIO"
                          TextName="Add DB"
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="CPF"
                          TextName="Add DB"
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="CNPJ"
                          TextName="Add DB"
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="UF"
                          TextName="Add DB"
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[BoxContentSteps.Row, { gap: -1 }]}>
                  <View
                    style={[
                      BoxContentSteps.BoxLine,
                      {
                        alignItems: "center",
                        width: 92,
                        height: 78,
                        justifyContent: "center",
                        borderRight: "none",
                      },
                    ]}
                  >
                    <Image
                      src={"/img/ImgCarreta.jpg"}
                      style={{ width: "52px" }}
                    />
                  </View>
                  <View style={BoxContentSteps.BoxLine}>
                    <View
                      style={[
                        BoxContentSteps.Column,
                        { padding: 2, justifyContent: "center" },
                      ]}
                    >
                      <View
                        style={[BoxContentSteps.Row, { paddingBottom: -3 }]}
                      >
                        <TextContainer
                          widthContainer={92}
                          Title="PLACA"
                          TextName={
                            snapshotReportsID[0]?.step7_Veiculo_Transportador
                              ?.carreta?.placa
                          }
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="MARCA"
                          TextName={
                            snapshotReportsID[0]?.step7_Veiculo_Transportador
                              ?.carreta?.marca
                          }
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="MODELO"
                          TextName={
                            snapshotReportsID[0]?.step7_Veiculo_Transportador
                              ?.carreta?.modelo
                          }
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="COR"
                          TextName={
                            snapshotReportsID[0]?.step7_Veiculo_Transportador
                              ?.carreta?.cor
                          }
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="ANO"
                          TextName={
                            snapshotReportsID[0]?.step7_Veiculo_Transportador
                              ?.carreta?.ano_modelo
                          }
                        />
                      </View>
                      <View
                        style={[BoxContentSteps.Row, { paddingBottom: -3 }]}
                      >
                        <TextContainer
                          widthContainer={186}
                          Title="PROPRIETÁRIO"
                          TextName="Add DB"
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="CPF"
                          TextName="Add DB"
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="CNPJ"
                          TextName="Add DB"
                        />
                        <TextContainer
                          widthContainer={92}
                          Title="UF"
                          TextName="Add DB"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </BoxStep>

          {/* Break para próxima pagina fixo */}
              <View
                style={{
                  fontSize: 5,

                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10,

                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                break
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    RELATÓRIO DE AVERIGUAÇÃO -{" "}
                  </Text>
                  <Text style={{ color: "#7C7C8A" }}>Nº PROCESSO: </Text>
                  <Text>{snapshotReportsID[0]?.id}</Text>
                  <Text style={{ color: "#7C7C8A", marginLeft: 5 }}>
                    CLIENTE / SEGURADO:{" "}
                  </Text>
                  <Text>{snapshotReportsID[0]?.cliente} </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    DATA-HORA DE EMISSÃO:{" "}
                  </Text>
                  <Text>
                    {" "}
                    {new Date().toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }) +
                      " - " +
                      new Date().toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                  </Text>
                </View>
              </View>

      {/* 8 – ÓRGÃO POLICIAL */}
              <BoxStep Title="8 – ÓRGÃO POLICIAL">
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284}
                    Title="DELEGACIA"
                    TextName={
                      snapshotReportsID[0]?.step8_Orgao_Policial?.delegacia
                    }
                  />
                  <TextContainer
                    widthContainer={92}
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92}
                    Title="MUNICÍPIO"
                    TextName={
                      snapshotReportsID[0]?.step8_Orgao_Policial?.cidade
                    }
                  />
                  <TextContainer
                    widthContainer={92}
                    Title="UF"
                    TextName={
                      snapshotReportsID[0]?.step8_Orgao_Policial?.estado
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284}
                    Title="BOLETIM DE OCORRÊNCIA Nº"
                    TextName={
                      snapshotReportsID[0]?.step8_Orgao_Policial
                        ?.boletim_ocorrencia
                    }
                  />
                  <TextContainer
                    widthContainer={284}
                    Title="INQUÉRITO POLICIAL Nº"
                    TextName={
                      snapshotReportsID[0]?.step8_Orgao_Policial
                        ?.inquerito_policial
                    }
                  />
                </View>
              </BoxStep>

      {/* 9 – GERENCIAMENTO DE RISCO - VEÍCULO */}
              <BoxStep Title="9 – GERENCIAMENTO DE RISCO - VEÍCULO">
                <View style={[BoxContentSteps.Row, { gap: -3 }]}>
                  <View
                    style={[
                      BoxContentSteps.BoxLine,
                      {
                        alignItems: "center",
                        width: 92,
                        justifyContent: "center",
                        borderRight: "none",
                      },
                    ]}
                  >
                    <Image
                      src={"/img/ImgRastreamento.jpg"}
                      style={{ width: "76px" }}
                    />
                  </View>
                  <View
                    style={[BoxContentSteps.BoxLine, { padding: 3, gap: 3 }]}
                  >
                    <TextContainer
                      widthContainer={92}
                      Title="EQUIPAMENTO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.equipamento
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="MARCA"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.marca
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="MODELO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.modelo
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="TIPO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.tipo
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="POSICIONAMENTO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.intervalo_rastreamento
                      }
                    />
                  </View>
                </View>
                <View style={[BoxContentSteps.Row, { gap: -3 }]}>
                  <View
                    style={[
                      BoxContentSteps.BoxLine,
                      {
                        alignItems: "center",
                        width: 92,
                        justifyContent: "center",
                        borderRight: "none",
                      },
                    ]}
                  >
                    <Image
                      src={"/img/ImgSegundaTecnologia.jpg"}
                      style={{ width: "76px" }}
                    />
                  </View>
                  <View
                    style={[BoxContentSteps.BoxLine, { padding: 3, gap: 3 }]}
                  >
                    <TextContainer
                      widthContainer={92}
                      Title="EQUIPAMENTO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.equipamento
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="MARCA"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.marca
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="MODELO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.modelo
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="TIPO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.tipo
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="POSICIONAMENTO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.intervalo_rastreamento
                      }
                    />
                  </View>
                </View>
                <View style={[BoxContentSteps.Row, { gap: -3 }]}>
                  <View
                    style={[
                      BoxContentSteps.BoxLine,
                      {
                        alignItems: "center",
                        width: 92,
                        justifyContent: "center",
                        borderRight: "none",
                      },
                    ]}
                  >
                    <Image
                      src={"/img/ImgOutrosRastremaneto.jpg"}
                      style={{ width: "76px" }}
                    />
                  </View>
                  <View
                    style={[BoxContentSteps.BoxLine, { padding: 3, gap: 3 }]}
                  >
                    <TextContainer
                      widthContainer={92}
                      Title="EQUIPAMENTO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.equipamento
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="MARCA"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.marca
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="MODELO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.modelo
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="TIPO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.tipo
                      }
                    />
                    <TextContainer
                      widthContainer={92}
                      Title="POSICIONAMENTO"
                      TextName={
                        snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.intervalo_rastreamento
                      }
                    />
                  </View>
                </View>

                <View style={BoxContentSteps.BoxSubTitle}>
                  <Text>SENSORES E ATUDORES</Text>
                </View>
                {/* Check line 1 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginTop: 3,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Bloqueador de combustível"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores
                          .bloqueador_combustivel == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores
                          .alarmes_sonoros_visuais == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Alarmes sonoros e visuais" />
                    </View>
                  </View>
                </View>

                {/* Check line 2 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Trava de 5ª roda"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores.trava_5_roda ==
                        "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores.trava_portas_bau ==
                        "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Trava de portas do baú" />
                    </View>
                  </View>
                </View>

                {/* Check line 3 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Sensor de porta da cabine"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {/* TODO: ADD NO BANCO DE DADOS */}
                        N/A
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores.botao_panico ==
                        "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Botão de pânico" />
                    </View>
                  </View>
                </View>

                {/* Check line 4 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Sensor de portas do baú"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores.sensor_portas_baú ==
                        "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores
                          .vandalismo_equipamento_veiculo_nao_localizado ==
                        "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Vandalismo no equipamento (Veículo Não Localizado)" />
                    </View>
                  </View>
                </View>

                {/* Check line 5 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Ignição (Liga / Desliga)"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores
                          .ignição_eletrônica == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores.teclado == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Teclado" />
                    </View>
                  </View>
                </View>

                {/* Check line 6 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Isca"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores.isca == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.rastreamento.sensores_atuadores
                          .sensor_desengate_carreta == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Sensor de desengate de carreta" />
                    </View>
                  </View>
                </View>

                <View style={BoxContentSteps.BoxSubTitle}>
                  <Text>CENTRAL DE MONITORAMENTO</Text>
                </View>
                {/* Check line 1 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginTop: 3,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Havia plano de viagem?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.central_monitoramento.plano_de_viagem == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.central_monitoramento
                          .bloqueador_sinal_rastreamento == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Os meliantes utilizaram bloqueador de sinal de rastreamento?" />
                    </View>
                  </View>
                </View>

                {/* Check line 2 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Motorista realizou paradas durante a viagem?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.central_monitoramento.paradas_durante_viagem ==
                        "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.central_monitoramento.disparo_sirene == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Houve disparo da sirene?" />
                    </View>
                  </View>
                </View>

                {/* Check line 3 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Foram enviadas as macros devidas à central de monitoramento?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.central_monitoramento
                          .macros_enviadas_central_monitoramento == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.central_monitoramento
                          .historico_posicao_rastreamento == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Recebemos histórico de posições do rastreamento?" />
                    </View>
                  </View>
                </View>

                {/* Check line 4 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Houve vandalismo no equipamento de rastreamento?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.central_monitoramento
                          .vandalismo_equipamento_monitoramento == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.central_monitoramento.possui_tacografo == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Veículo possui tacógrafo" />
                    </View>
                  </View>
                </View>

                {/* Check line 5 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Os discos foram coletados / analisados"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]?.step9_Gerenciamento_Risco
                          ?.central_monitoramento.discos_coletados_analisados ==
                        "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {/* TODO: Add no Banco de dados */}
                        N/A
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Foi analisado a posições do rastreamento?" />
                    </View>
                  </View>
                </View>

                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={"100%"}
                    Title="SOBRE A ÚLTIMA POSIÇÃO DO RASTREAMENTO:"
                    TextName={
                      snapshotReportsID[0]?.step9_Gerenciamento_Risco
                        ?.central_monitoramento.detalhes_historico_rastreamento
                    }
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={"100%"}
                    Title="SOBRE OS DISCOS DE TACÓGRAFO:"
                    TextName={
                      snapshotReportsID[0]?.step9_Gerenciamento_Risco
                        ?.central_monitoramento
                        .detalhes_discos_coletados_analisados
                    }
                  />
                </View>
              </BoxStep>

          {/* Break para próxima pagina fixo */}
              <View
                style={{
                  fontSize: 5,

                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10,

                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                break
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    RELATÓRIO DE AVERIGUAÇÃO -{" "}
                  </Text>
                  <Text style={{ color: "#7C7C8A" }}>Nº PROCESSO: </Text>
                  <Text>{snapshotReportsID[0]?.id}</Text>
                  <Text style={{ color: "#7C7C8A", marginLeft: 5 }}>
                    CLIENTE / SEGURADO:{" "}
                  </Text>
                  <Text>{snapshotReportsID[0]?.cliente} </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    DATA-HORA DE EMISSÃO:{" "}
                  </Text>
                  <Text>
                    {" "}
                    {new Date().toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }) +
                      " - " +
                      new Date().toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                  </Text>
                </View>
              </View>

      {/* 10 – DOS SISTEMAS PROTECIONAIS DO CARREGAMENTO */}
              <BoxStep Title="10 – DOS SISTEMAS PROTECIONAIS DO CARREGAMENTO">
                {/* Check line 1 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Escolta"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step10_Sistema_Protecionais_Carregamento?.escolta ==
                        "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {/* TODO: ADD Banco de dados */}
                        N/A
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Velada" />
                    </View>
                  </View>
                </View>
                {/* Check line 2 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Comboio?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step10_Sistema_Protecionais_Carregamento?.comboio ==
                        "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {/* TODO: ADD banco de Dados */}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Quantidade de veículos" />
                    </View>
                  </View>
                </View>
              </BoxStep>

      {/* 11 - DECLARAÇÃO DO MOTORISTA E AJUDANTE (S) */}
              <BoxStep Title="11 - DECLARAÇÃO DO MOTORISTA E AJUDANTE (S)">
                {/* Check line 1 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginTop: 3,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="As declarações do motorista foram aceitas com credibilidade?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step11_Declaracao_Motorista_Ajudante
                          ?.declaracao_motorista_aceite == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>
                </View>

                <View style={[BoxContentSteps.Row, { paddingTop: 5 }]}>
                  <Image
                    src={"/img/pdf/imgAnexoNarrativaMotorista.jpg"}
                    style={{ width: "96px" }}
                  />
                </View>
                <View style={[BoxContentSteps.Row, { paddingTop: 5 }]}>
                  <ImageBox>
                    <Image src={"/img/pdf/AnexoNarrativa.jpg"} />
                  </ImageBox>
                </View>
              </BoxStep>

          {/* Break para próxima pagina fixo */}
              <View
                style={{
                  fontSize: 5,

                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10,

                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                break
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    RELATÓRIO DE AVERIGUAÇÃO -{" "}
                  </Text>
                  <Text style={{ color: "#7C7C8A" }}>Nº PROCESSO: </Text>
                  <Text>{snapshotReportsID[0]?.id}</Text>
                  <Text style={{ color: "#7C7C8A", marginLeft: 5 }}>
                    CLIENTE / SEGURADO:{" "}
                  </Text>
                  <Text>{snapshotReportsID[0]?.cliente} </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    DATA-HORA DE EMISSÃO:{" "}
                  </Text>
                  <Text>
                    {" "}
                    {new Date().toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }) +
                      " - " +
                      new Date().toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                  </Text>
                </View>
              </View>

      {/* 12 – GERENCIAMENTO DE RISCO - DEPÓSITO */}
              <BoxStep Title="12 – GERENCIAMENTO DE RISCO - DEPÓSITO" >
                {/* Check line 1 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Depósito sinistrado de controle exclusivo do segurado?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.deposito_exclusivo_segurado == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.deposito_seguranca_eletronica == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Depósito possui segurança eletrônica?" />
                    </View>
                  </View>
                </View>
                {/* Check line 2 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Mercadoria carregada no veículo transportador?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.mercadoria_carregada_veiculo == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.deposito_seguranca_fisica == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Depósito possui segurança patrimonial física armada?" />
                    </View>
                  </View>
                </View>

                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={284}
                    Title="EMPRESA DE SEGURANÇA PATRIMONIAL"
                    TextName={
                      snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                        ?.seguranca_patrimonial.empresa
                    }
                  />
                  <TextContainer
                    widthContainer={284}
                    Title="RESPONSÁVEL"
                    TextName={
                      snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                        ?.seguranca_patrimonial.responsaval
                    }
                  />
                </View>

                <View style={BoxContentSteps.BoxSubTitle}>
                  <Text>DISPOSITIVOS DE SEGURANÇA</Text>
                </View>

                {/* Check line 1 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginTop: 3,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="CFTV?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.dispositos_seguranca.cftv == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.dispositos_seguranca.botao_panico == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Botão de pânico?" />
                    </View>
                  </View>
                </View>

                {/* Check line 2 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Cerca elétrica?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.dispositos_seguranca.cerca_eletrica == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.dispositos_seguranca.alarmes == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Alarmes?" />
                    </View>
                  </View>
                </View>

                {/* Check line 3 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Sensores de presença?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.dispositos_seguranca.sensores_presenca == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.dispositos_seguranca.sensores_invasao == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Sensores de invasão?" />
                    </View>
                  </View>
                </View>

                {/* Check line 4 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Sirene"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.dispositos_seguranca.sirene == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                    </View>
                  </View>

                  <View style={BoxContentSteps.LineVertical} />

                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxSelected>
                        {snapshotReportsID[0]
                          ?.step12_Gerenciamento_Risco_Deposito
                          ?.dispositos_seguranca.outros == "Sim" ? (
                          <Image src={"/img/CheckBoxTrue.jpg"} />
                        ) : (
                          <Image
                            src={"/img/CheckBoxFalse.jpg"}
                            style={{ width: 8 }}
                          />
                        )}
                      </CheckBoxSelected>
                      <CheckBoxTitle Title="Outros?" widthContainer="20%" />
                      <View style={{fontSize:9, display:"flex", alignItems: "center", justifyContent: "center"}}>
                         <Text style={{color: "#7C7C8A"}}>:</Text>
                      </View>
                      <CheckBoxTitle
                        TextColor="#7C7C8A"
                        Title={"Add DB"}
                        widthContainer="78.6%"
                      />
                    </View>
                  </View>
                </View>
              </BoxStep>

      {/* 13 – DOS LOCAIS DO EVENTO */}
              <BoxStep 
              Title="13 – DOS LOCAIS DO EVENTO"
              BorderBottom="false"
              BorderBottomLeftRadius="0"
              BorderBottomRightRadius="0"
              >
                {/* Check line 1 */}
                <View
                  style={[
                    BoxContentSteps.Row,
                    {
                      gap: 10,
                      marginBottom: -7,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  ]}
                >
                  <View style={BoxContentSteps.Column}>
                    <View style={BoxContentSteps.Row}>
                      <CheckBoxTitle
                        Title="Reconstituição dos locais com o condutor?"
                        justifyContentTitle="flex-end"
                      />
                      <CheckBoxSelected>NA</CheckBoxSelected>
                    </View>
                  </View>
                </View>

                <View style={BoxContentSteps.BoxSubTitle}>
                  <Text>DESCRIÇÃO DO LOCAL DA ABORDAGEM</Text>
                </View>

                <View style={[BoxContentSteps.Row, {paddingTop: 3}]}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="ENDEREÇO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="MUNICÍPIO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="UF"
                    TextName="Add DB"
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={93} // 3
                    Title="DATA"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="HORA"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="LATITUDE"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="LONGITUDE"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="CÂMERAS DE CFTV"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="TESTEMUNHAS"
                    TextName="Add DB"
                  />
                </View>

                {/* Image Fotográficos */}
                <View style={[BoxContentSteps.Row, { paddingTop: 5 }]}>
                  <Image
                    src={"/img/pdf/imgRegistroFotografico.jpg"}
                    style={{ width: "96px" }}
                  />
                </View>

                <View style={BoxContentSteps.Row}>
                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico1.jpg"} />
                    </ImageBox>
                  </View>

                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico2.jpg"} />
                    </ImageBox>
                  </View>
                </View>

              </BoxStep>

          {/* Break para próxima pagina fixo */}
              <View
                style={{
                  fontSize: 5,

                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10,

                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                break
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    RELATÓRIO DE AVERIGUAÇÃO -{" "}
                  </Text>
                  <Text style={{ color: "#7C7C8A" }}>Nº PROCESSO: </Text>
                  <Text>{snapshotReportsID[0]?.id}</Text>
                  <Text style={{ color: "#7C7C8A", marginLeft: 5 }}>
                    CLIENTE / SEGURADO:{" "}
                  </Text>
                  <Text>{snapshotReportsID[0]?.cliente} </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    DATA-HORA DE EMISSÃO:{" "}
                  </Text>
                  <Text>
                    {" "}
                    {new Date().toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }) +
                      " - " +
                      new Date().toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                  </Text>
                </View>
              </View>

              <BoxStep
                Icon={
                  <Image
                    src={"/img/pdf/ArrowLeftUp.jpg"}
                    style={{ width: "8px" }}
                  />
                }
                BorderTop="false"
                BorderBottom="false"
                BorderBottomLeftRadius="0"
                BorderBottomRightRadius="0"
              >
                <View style={BoxContentSteps.BoxSubTitle}>
                  <Text>
                    DESCRIÇÃO DO LOCAL DE CATIVEIRO E ABANDONO DO MOTORISTA:
                  </Text>
                </View>

                <View style={[BoxContentSteps.Row, {paddingTop: 3}]}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="ENDEREÇO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="MUNICÍPIO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="UF"
                    TextName="Add DB"
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={93} // 3
                    Title="DATA"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="HORA"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="LATITUDE"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="LONGITUDE"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="CÂMERAS DE CFTV"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="TESTEMUNHAS"
                    TextName="Add DB"
                  />
                </View>

                {/* Image Fotográficos */}
                <View style={[BoxContentSteps.Row, { paddingTop: 5 }]}>
                  <Image
                    src={"/img/pdf/imgRegistroFotografico.jpg"}
                    style={{ width: "96px" }}
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico1.jpg"} />
                    </ImageBox>
                  </View>

                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico2.jpg"} />
                    </ImageBox>
                  </View>
                </View>
                {/* -------  */}
                <View style={BoxContentSteps.BoxSubTitle}>
                  <Text>
                     DESCRIÇÃO DO LOCAL DE ENCONTRO DO VEÍCULO:
                  </Text>
                </View>

                <View style={[BoxContentSteps.Row, {paddingTop: 3}]}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="ENDEREÇO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="MUNICÍPIO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="UF"
                    TextName="Add DB"
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={93} // 3
                    Title="DATA"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="HORA"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="LATITUDE"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="LONGITUDE"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="CÂMERAS DE CFTV"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="TESTEMUNHAS"
                    TextName="Add DB"
                  />
                </View>

                {/* Image Fotográficos */}
                <View style={[BoxContentSteps.Row, { paddingTop: 5 }]}>
                  <Image
                    src={"/img/pdf/imgRegistroFotografico.jpg"}
                    style={{ width: "96px" }}
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico1.jpg"} />
                    </ImageBox>
                  </View>

                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico2.jpg"} />
                    </ImageBox>
                  </View>
                </View>

              </BoxStep>

          {/* Break para próxima pagina fixo */}
              <View
                style={{
                  fontSize: 5,

                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10,

                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                break
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    RELATÓRIO DE AVERIGUAÇÃO -{" "}
                  </Text>
                  <Text style={{ color: "#7C7C8A" }}>Nº PROCESSO: </Text>
                  <Text>{snapshotReportsID[0]?.id}</Text>
                  <Text style={{ color: "#7C7C8A", marginLeft: 5 }}>
                    CLIENTE / SEGURADO:{" "}
                  </Text>
                  <Text>{snapshotReportsID[0]?.cliente} </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ color: "#7C7C8A" }}>
                    DATA-HORA DE EMISSÃO:{" "}
                  </Text>
                  <Text>
                    {" "}
                    {new Date().toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }) +
                      " - " +
                      new Date().toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                  </Text>
                </View>
              </View>

              <BoxStep
                Icon={
                  <Image
                    src={"/img/pdf/ArrowLeftUp.jpg"}
                    style={{ width: "8px" }}
                  />
                }
                BorderTop="false"
              >
                <View style={BoxContentSteps.BoxSubTitle}>
                  <Text>
                  DESCRIÇÃO DO LOCAL DE RECUPERAÇÃO DA CARGA:
                  </Text>
                </View>

                <View style={[BoxContentSteps.Row, {paddingTop: 3}]}>
                  <TextContainer
                    widthContainer={284} // 3
                    Title="ENDEREÇO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="BAIRRO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="MUNICÍPIO"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={92} // 1
                    Title="UF"
                    TextName="Add DB"
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <TextContainer
                    widthContainer={93} // 3
                    Title="DATA"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="HORA"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="LATITUDE"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="LONGITUDE"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="CÂMERAS DE CFTV"
                    TextName="Add DB"
                  />
                  <TextContainer
                    widthContainer={93} // 1
                    Title="TESTEMUNHAS"
                    TextName="Add DB"
                  />
                </View>

                {/* Image Fotográficos */}
                <View style={[BoxContentSteps.Row, { paddingTop: 5 }]}>
                  <Image
                    src={"/img/pdf/imgRegistroFotografico.jpg"}
                    style={{ width: "96px" }}
                  />
                </View>
                <View style={BoxContentSteps.Row}>
                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico1.jpg"} />
                    </ImageBox>
                  </View>

                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico2.jpg"} />
                    </ImageBox>
                  </View>
                </View>
              </BoxStep>

              
          {/* Break para próxima pagina fixo */}
              <View
                    style={{
                      fontSize: 5,

                      marginTop: 10,
                      marginBottom: 10,
                      marginLeft: 10,
                      marginRight: 10,

                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    break
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ color: "#7C7C8A" }}>
                        RELATÓRIO DE AVERIGUAÇÃO -{" "}
                      </Text>
                      <Text style={{ color: "#7C7C8A" }}>Nº PROCESSO: </Text>
                      <Text>{snapshotReportsID[0]?.id}</Text>
                      <Text style={{ color: "#7C7C8A", marginLeft: 5 }}>
                        CLIENTE / SEGURADO:{" "}
                      </Text>
                      <Text>{snapshotReportsID[0]?.cliente} </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ color: "#7C7C8A" }}>
                        DATA-HORA DE EMISSÃO:{" "}
                      </Text>
                      <Text>
                        {" "}
                        {new Date().toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }) +
                          " - " +
                          new Date().toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}
                      </Text>
                    </View>
              </View>

          
       {/* 14 – DAS AVERIGUAÇÕES */}
              <BoxStep Title="14 – DAS AVERIGUAÇÕES">
                  <View style={[BoxContentSteps.Row, { paddingTop: 5}]}>
                    <Image
                      src={"/img/pdf/imgResumoAveriguações.jpg"}
                      style={{ width: "52px", height: "15px" }}
                    />
                  </View>
                  <Text style={
                    { 
                    marginTop: 6,
                    marginBottom: 20,
                    marginRight: 12,
                    marginLeft: 12,
                    textAlign: 'justify', 
                    fontSize: 9,
                    }}>
                      {TextResumo_averiguacoes}
                  </Text>
              </BoxStep>

          {/* Break para próxima pagina fixo */}
              <View
                    style={{
                      fontSize: 5,

                      marginTop: 10,
                      marginBottom: 10,
                      marginLeft: 10,
                      marginRight: 10,

                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    break
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ color: "#7C7C8A" }}>
                        RELATÓRIO DE AVERIGUAÇÃO -{" "}
                      </Text>
                      <Text style={{ color: "#7C7C8A" }}>Nº PROCESSO: </Text>
                      <Text>{snapshotReportsID[0]?.id}</Text>
                      <Text style={{ color: "#7C7C8A", marginLeft: 5 }}>
                        CLIENTE / SEGURADO:{" "}
                      </Text>
                      <Text>{snapshotReportsID[0]?.cliente} </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ color: "#7C7C8A" }}>
                        DATA-HORA DE EMISSÃO:{" "}
                      </Text>
                      <Text>
                        {" "}
                        {new Date().toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }) +
                          " - " +
                          new Date().toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}
                      </Text>
                    </View>
              </View>


       
       {/* 15 – RECUPERAÇÃO DA CARGA */}
              <BoxStep Title="15 – RECUPERAÇÃO DA CARGA" >
                        <View style={[BoxContentSteps.Column, {paddingBottom: -3}]}>
                        <View style={BoxContentSteps.Row}>
                          <CheckBoxTitle 
                          Title="Houve recuperação da carga?" 
                          widthContainer="78.6%" 
                          justifyContentTitle="flex-end"
                          />
                          <CheckBoxSelected>
                            {snapshotReportsID[0]
                              ?.step15_Recuperacao_Carga?.recuperacao_carga == "Sim" ? (
                              <Image src={"/img/CheckBoxTrue.jpg"} />
                            ) : (
                              <Image
                                src={"/img/CheckBoxFalse.jpg"}
                                style={{ width: 8 }}
                              />
                            )}
                          </CheckBoxSelected>
                          <View style={{fontSize:9, display:"flex", alignItems: "center", justifyContent: "center"}}>
                              <Text style={{color: "#7C7C8A"}}>:</Text>
                          </View>
                          <CheckBoxTitle
                            TextColor="#7C7C8A"
                            Title={"Add DB"}
                            widthContainer="20%"
                          />
                        </View>
                      </View>

                      <View style={BoxContentSteps.BoxSubTitle}>
                          <Text>FATO GERADOR DA RECUPERAÇÃO</Text>
                        </View>
                            <View style={[BoxContentSteps.Row, {paddingTop: 3}]}>
                              <CheckBoxTitle
                                Title="A carga recuperada foi liberada em auto de entrega?"
                                justifyContentTitle="flex-end"
                              />
                              <CheckBoxSelected>
                              {snapshotReportsID[0]
                              ?.step15_Recuperacao_Carga?.carga_liberada_auto_entrega == "Sim" ? (
                              <Image src={"/img/CheckBoxTrue.jpg"} />
                            ) : (
                              <Image
                                src={"/img/CheckBoxFalse.jpg"}
                                style={{ width: 8 }}
                              />
                            )}
                              </CheckBoxSelected>
                            </View>
                      

              </BoxStep>

       
      {/* 16 – ANEXOS FOTOGRÁFICOS */}
              <BoxStep 
              Title="16 – ANEXOS FOTOGRÁFICOS"
              BorderBottom="false"
              BorderBottomLeftRadius="0"
              BorderBottomRightRadius="0"
              >
                  <View style={[BoxContentSteps.Row, { paddingTop: 5 }]}>
                    <Image
                      src={"/img/pdf/imgRegistroFotografico.jpg"}
                      style={{ width: "96px" }}
                    />
                  </View>

                  <View style={BoxContentSteps.Row}>

                    <View
                      style={[
                        BoxContentSteps.Row,
                        { paddingTop: 5, width: "50%" },
                      ]}
                    >
                      <ImageBox>
                        <Image src={"/img/pdf/imgRegistroFotografico1.jpg"} />
                      </ImageBox>
                    </View>

                    <View
                      style={[
                        BoxContentSteps.Row,
                        { paddingTop: 5, width: "50%" },
                      ]}
                    >
                      <ImageBox>
                        <Image src={"/img/pdf/imgRegistroFotografico2.jpg"} />
                      </ImageBox>
                    </View>

                  </View>

                  <View style={BoxContentSteps.Row}>

                    <View
                      style={[
                        BoxContentSteps.Row,
                        { paddingTop: 5, width: "50%" },
                      ]}
                    >
                      <ImageBox>
                        <Image src={"/img/pdf/imgRegistroFotografico1.jpg"} />
                      </ImageBox>
                    </View>

                    <View
                      style={[
                        BoxContentSteps.Row,
                        { paddingTop: 5, width: "50%" },
                      ]}
                    >
                      <ImageBox>
                        <Image src={"/img/pdf/imgRegistroFotografico2.jpg"} />
                      </ImageBox>
                    </View>

                  </View>
              </BoxStep>

              
          {/* Break para próxima pagina fixo */}
              <View
                        style={{
                          fontSize: 5,

                          marginTop: 10,
                          marginBottom: 10,
                          marginLeft: 10,
                          marginRight: 10,

                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                        break
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Text style={{ color: "#7C7C8A" }}>
                            RELATÓRIO DE AVERIGUAÇÃO -{" "}
                          </Text>
                          <Text style={{ color: "#7C7C8A" }}>Nº PROCESSO: </Text>
                          <Text>{snapshotReportsID[0]?.id}</Text>
                          <Text style={{ color: "#7C7C8A", marginLeft: 5 }}>
                            CLIENTE / SEGURADO:{" "}
                          </Text>
                          <Text>{snapshotReportsID[0]?.cliente} </Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Text style={{ color: "#7C7C8A" }}>
                            DATA-HORA DE EMISSÃO:{" "}
                          </Text>
                          <Text>
                            {" "}
                            {new Date().toLocaleDateString("pt-BR", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }) +
                              " - " +
                              new Date().toLocaleTimeString("pt-BR", {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                              })}
                          </Text>
                        </View>
              </View>

              <BoxStep
                Icon={
                  <Image
                    src={"/img/pdf/ArrowLeftUp.jpg"}
                    style={{ width: "8px" }}
                  />
                }
                BorderTop="false" 
              >
                {/* Image Fotográficos */}
                <View style={BoxContentSteps.Row}>
                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico1.jpg"} />
                    </ImageBox>
                  </View>

                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico2.jpg"} />
                    </ImageBox>
                  </View>
                </View>
                {/* Image Fotográficos */}
                <View style={BoxContentSteps.Row}>
                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico1.jpg"} />
                    </ImageBox>
                  </View>

                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico2.jpg"} />
                    </ImageBox>
                  </View>
                </View>
                {/* Image Fotográficos */}
                <View style={BoxContentSteps.Row}>
                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico1.jpg"} />
                    </ImageBox>
                  </View>

                  <View
                    style={[
                      BoxContentSteps.Row,
                      { paddingTop: 5, width: "50%" },
                    ]}
                  >
                    <ImageBox>
                      <Image src={"/img/pdf/imgRegistroFotografico2.jpg"} />
                    </ImageBox>
                  </View>
                </View>

              </BoxStep>

          {/* Break para próxima pagina fixo */}
              <View
                    style={{
                      fontSize: 5,

                      marginTop: 10,
                      marginBottom: 10,
                      marginLeft: 10,
                      marginRight: 10,

                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    break
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ color: "#7C7C8A" }}>
                        RELATÓRIO DE AVERIGUAÇÃO -{" "}
                      </Text>
                      <Text style={{ color: "#7C7C8A" }}>Nº PROCESSO: </Text>
                      <Text>{snapshotReportsID[0]?.id}</Text>
                      <Text style={{ color: "#7C7C8A", marginLeft: 5 }}>
                        CLIENTE / SEGURADO:{" "}
                      </Text>
                      <Text>{snapshotReportsID[0]?.cliente} </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ color: "#7C7C8A" }}>
                        DATA-HORA DE EMISSÃO:{" "}
                      </Text>
                      <Text>
                        {" "}
                        {new Date().toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }) +
                          " - " +
                          new Date().toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}
                      </Text>
                    </View>
              </View>

      {/* 17 – CONCLUSÃO */}
            <BoxStep Title="17 – CONCLUSÃO">
            <View style={[BoxContentSteps.Row, { paddingTop: 5 }]}>
                <Image
                  src={"/img/pdf/imgResumoAveriguações.jpg"}
                  style={{ width: "52px" }}
                />
              </View>
             
                <TextArea
                  widthContainer={"100%"}
                  FontSize={9}
                >
                <Text style={{ margin: 12, textAlign: 'justify'}} >
                {TextResumo_conclusoes}
                </Text>
                </TextArea>
              
            </BoxStep>

              <Text
                style={Content.pageNumber}
                render={({ pageNumber, totalPages }) =>
                  `${pageNumber} / ${totalPages}`
                }
                fixed
              />
            </Page>
          </Document>
        </PDFViewer>
      </Container>
    </>
  );
}


