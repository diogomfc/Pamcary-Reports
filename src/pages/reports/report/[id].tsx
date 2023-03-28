import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Image from "next/image";

import Lottie from "lottie-react";
import animationConfetes from "../../../../public/lottieFiles/confetes2.json";
import animationCongratulate from "../../../../public/lottieFiles/congratulate.json";
import animationSuccess from "../../../../public/lottieFiles/Success.json";
import animationUnlockedNextStep from "../../../../public/lottieFiles/UnlockedNextStep.json";

import {
  CaretRight,
  Checks,
  FloppyDisk,
  HourglassSimpleMedium,
  ListBullets,
  FilePdf,
  X,
  Sparkle,
} from "phosphor-react";

import { ToastContainer } from "react-toastify";

import { useTotalCountStep } from "@hooks/useTotalConutStep";
import { useOnSnapshotReportsId } from "@hooks/useFirebase/useOnSnapshotReportsId";

import { HeaderReport } from "@components/Reports/HeaderReport";
import { ButtonReport } from "@components/Reports/Button";
import { Header } from "@components/Header";
import { SidebarSteps } from "@components/Siderbar";
import { StepItem } from "@components/Siderbar/Steps";

import Step1_Cliente_Segurado from "@components/Reports/Forms/Step1_Cliente_Segurado";
import Step2_Caracteristica_Sinistro from "@components/Reports/Forms/Step2_Caracteristica";

import {
  Container,
  Content,
  ContentEmitirRelatorio,
  LottieConfetes,
  LottieSuccess,
  LayoutContainer,
  LayoutContent,
  LottieContent,
} from "./styles";

export default function Report() {
  const router = useRouter();
  const { id } = router.query;
  const reportId = id as string;

  const [numberStep, setNumberStep] = useState("");

  const { snapshotReportsID } = useOnSnapshotReportsId(reportId);
  const TotalCountStep = useTotalCountStep(reportId, snapshotReportsID);

  useEffect(() => {
    TotalCountStep === 0 && setNumberStep("1");
    TotalCountStep === 1 && setNumberStep("2");
    TotalCountStep === 2 && setNumberStep("3");
    TotalCountStep === 17 && setNumberStep("18");
  }, [TotalCountStep]);

  return (
    <Container>
      <Header />
      <LayoutContainer>
        <SidebarSteps>
          <StepItem
            title="Cliente/Segurado"
            numberIcon="1"
            active={numberStep === "1" ? "Active" : " "}
            onStepNumber={() => {
              setNumberStep("1");
            }}
            statusTitle={
              snapshotReportsID[0]?.step1_Cliente_Segurado?.status ===
              "Concluído"
                ? "Cliente/Segurado - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step1_Cliente_Segurado?.status ===
                  "Aprovado"
                ? "Cliente/Segurado - Status: Revisão concluída"
                : snapshotReportsID[0]?.step1_Cliente_Segurado?.status ===
                  "Cancelado"
                ? "Cliente/Segurado - Status: solicitado Cancelado"
                : snapshotReportsID[0]?.step1_Cliente_Segurado?.status ===
                  "Revisando"
                ? "Cliente/Segurado - Status: Revisando..."
                : snapshotReportsID[0]?.step1_Cliente_Segurado?.status ||
                  "Formalizando"
                ? "Cliente/Segurado - Status: Formalizando"
                : "Cliente/Segurado - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step1_Cliente_Segurado?.status ||
              "Formalizando"
            }
          />
          <StepItem
            title="Característica do Sinistro"
            numberIcon="2"
            active={numberStep === "2" ? "Active" : " "}
            onStepNumber={() => {
              setNumberStep("2");
            }}
            statusTitle={
              snapshotReportsID[0]?.step2_Caracteristica_Sinistro?.status ===
              "Concluído"
                ? "Característica do Sinistro - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step2_Caracteristica_Sinistro
                    ?.status === "Aprovado"
                ? "Característica do Sinistro - Status: Revisão concluída"
                : snapshotReportsID[0]?.step2_Caracteristica_Sinistro
                    ?.status === "Cancelado"
                ? "Característica do Sinistro - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step2_Caracteristica_Sinistro
                    ?.status === "Revisando"
                ? "Característica do Sinistro - Status: Revisando..."
                : snapshotReportsID[0]?.step2_Caracteristica_Sinistro?.status ||
                  "Formalizando"
                ? "Característica do Sinistro - Status: Formalizando"
                : "Característica do Sinistro - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step1_Cliente_Segurado?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step1_Cliente_Segurado?.status ===
                "Aprovado" ||
              snapshotReportsID[0]?.step1_Cliente_Segurado?.status ===
                "Update" ||
              snapshotReportsID[0]?.step1_Cliente_Segurado?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step1_Cliente_Segurado?.status ===
                "Revisando"
                ? snapshotReportsID[0]?.step2_Caracteristica_Sinistro?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            title="Cronologia do sinistro"
            numberIcon="3"
            active={numberStep === "3" ? "Active" : " "}
            onStepNumber={() => {
              setNumberStep("3");
            }}
            statusTitle={
              snapshotReportsID[0]?.step3_Cronologia_Sinistro?.status ===
              "Concluído"
                ? "Cronologia do sinistro - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step3_Cronologia_Sinistro?.status ===
                  "Aprovado"
                ? "Cronologia do sinistro - Status: Revisão concluída"
                : snapshotReportsID[0]?.step3_Cronologia_Sinistro?.status ===
                  "Cancelado"
                ? "Cronologia do sinistro - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step3_Cronologia_Sinistro?.status ===
                  "Revisando"
                ? "Cronologia do sinistro - Status: Revisando..."
                : snapshotReportsID[0]?.step3_Cronologia_Sinistro?.status ||
                  "Formalizando"
                ? "Cronologia do sinistro - Status: Formalizando"
                : "Cronologia do sinistro - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step2_Caracteristica_Sinistro?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step2_Caracteristica_Sinistro?.status ===
                "Aprovado" ||
              snapshotReportsID[0]?.step2_Caracteristica_Sinistro?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step2_Caracteristica_Sinistro?.status ===
                "Revisando"
                ? snapshotReportsID[0]?.step3_Cronologia_Sinistro?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Do carregamento"
            numberIcon="4"
            statusTitle={
              snapshotReportsID[0]?.step4_Carregamento?.status === "Concluído"
                ? "Do carregamento - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step4_Carregamento?.status ===
                  "Aprovado"
                ? "Do carregamento - Status: Revisão concluída"
                : snapshotReportsID[0]?.step4_Carregamento?.status ===
                  "Cancelado"
                ? "Do carregamento - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step4_Carregamento?.status ===
                  "Revisando"
                ? "Do carregamento - Status: Revisando..."
                : snapshotReportsID[0]?.step4_Carregamento?.status ||
                  "Formalizando"
                ? "Do carregamento - Status: Formalizando"
                : "Do carregamento - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step3_Cronologia_Sinistro?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step3_Cronologia_Sinistro?.status ===
                "Aprovado" ||
              snapshotReportsID[0]?.step3_Cronologia_Sinistro?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step3_Cronologia_Sinistro?.status ===
                "Revisando"
                ? snapshotReportsID[0]?.step4_Carregamento?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Motorista"
            numberIcon="5"
            statusTitle={
              snapshotReportsID[0]?.step5_Motorista?.status === "Concluído"
                ? "Motorista - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step5_Motorista?.status === "Aprovado"
                ? "Motorista - Status: Revisão concluída"
                : snapshotReportsID[0]?.step5_Motorista?.status === "Cancelado"
                ? "Motorista - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step5_Motorista?.status === "Revisando"
                ? "Motorista - Status: Revisando..."
                : snapshotReportsID[0]?.step5_Motorista?.status ||
                  "Formalizando"
                ? "Motorista - Status: Formalizando"
                : "Motorista - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step4_Carregamento?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step4_Carregamento?.status === "Aprovado" ||
              snapshotReportsID[0]?.step4_Carregamento?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step4_Carregamento?.status === "Revisando"
                ? snapshotReportsID[0]?.step5_Motorista?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Ajudantes"
            numberIcon="6"
            statusTitle={
              snapshotReportsID[0]?.step6_Ajudantes?.status === "Concluído"
                ? "Ajudantes - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step6_Ajudantes?.status === "Aprovado"
                ? "Ajudantes - Status: Revisão concluída"
                : snapshotReportsID[0]?.step6_Ajudantes?.status === "Cancelado"
                ? "Ajudantes - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step6_Ajudantes?.status === "Revisando"
                ? "Ajudantes - Status: Revisando..."
                : snapshotReportsID[0]?.step6_Ajudantes?.status ||
                  "Formalizando"
                ? "Ajudantes - Status: Formalizando"
                : "Ajudantes - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step5_Motorista?.status === "Concluído" ||
              snapshotReportsID[0]?.step5_Motorista?.status === "Aprovado" ||
              snapshotReportsID[0]?.step5_Motorista?.status === "Cancelado" ||
              snapshotReportsID[0]?.step5_Motorista?.status === "Revisando"
                ? snapshotReportsID[0]?.step6_Ajudantes?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Veículo transportador"
            numberIcon="7"
            statusTitle={
              snapshotReportsID[0]?.step7_Veiculo_Transportador?.status ===
              "Concluído"
                ? "Veículo transportador - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step7_Veiculo_Transportador?.status ===
                  "Aprovado"
                ? "Veículo transportador - Status: Revisão concluída"
                : snapshotReportsID[0]?.step7_Veiculo_Transportador?.status ===
                  "Cancelado"
                ? "Veículo transportador - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step7_Veiculo_Transportador?.status ===
                  "Revisando"
                ? "Veículo transportador - Status: Revisando..."
                : snapshotReportsID[0]?.step7_Veiculo_Transportador?.status ||
                  "Formalizando"
                ? "Veículo transportador - Status: Formalizando"
                : "Veículo transportador - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step6_Ajudantes?.status === "Concluído" ||
              snapshotReportsID[0]?.step6_Ajudantes?.status === "Aprovado" ||
              snapshotReportsID[0]?.step6_Ajudantes?.status === "Cancelado" ||
              snapshotReportsID[0]?.step6_Ajudantes?.status === "Revisando"
                ? snapshotReportsID[0]?.step7_Veiculo_Transportador?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Órgão policial"
            numberIcon="8"
            statusTitle={
              snapshotReportsID[0]?.step8_Orgao_Policial?.status === "Concluído"
                ? "Órgão policial - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step8_Orgao_Policial?.status ===
                  "Aprovado"
                ? "Órgão policial - Status: Revisão concluída"
                : snapshotReportsID[0]?.step8_Orgao_Policial?.status ===
                  "Cancelado"
                ? "Órgão policial - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step8_Orgao_Policial?.status ===
                  "Revisando"
                ? "Órgão policial - Status: Revisando..."
                : snapshotReportsID[0]?.step8_Orgao_Policial?.status ||
                  "Formalizando"
                ? "Órgão policial - Status: Formalizando"
                : "Órgão policial - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step7_Veiculo_Transportador?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step7_Veiculo_Transportador?.status ===
                "Aprovado" ||
              snapshotReportsID[0]?.step7_Veiculo_Transportador?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step7_Veiculo_Transportador?.status ===
                "Revisando"
                ? snapshotReportsID[0]?.step8_Orgao_Policial?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Gerenciamento de risco – veículo"
            numberIcon="9"
            statusTitle={
              snapshotReportsID[0]?.step9_Gerenciamento_Risco?.status ===
              "Concluído"
                ? "Gerenciamento de risco – veículo - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step9_Gerenciamento_Risco?.status ===
                  "Aprovado"
                ? "Gerenciamento de risco – veículo - Status: Revisão concluída"
                : snapshotReportsID[0]?.step9_Gerenciamento_Risco?.status ===
                  "Cancelado"
                ? "Gerenciamento de risco – veículo - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step9_Gerenciamento_Risco?.status ===
                  "Revisando"
                ? "Gerenciamento de risco – veículo - Status: Revisando..."
                : snapshotReportsID[0]?.step9_Gerenciamento_Risco?.status ||
                  "Formalizando"
                ? "Gerenciamento de risco – veículo - Status: Formalizando"
                : "Gerenciamento de risco – veículo - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step8_Orgao_Policial?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step8_Orgao_Policial?.status ===
                "Aprovado" ||
              snapshotReportsID[0]?.step8_Orgao_Policial?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step8_Orgao_Policial?.status === "Revisando"
                ? snapshotReportsID[0]?.step9_Gerenciamento_Risco?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Dos sistemas protecionais do carregamento"
            numberIcon="10"
            statusTitle={
              snapshotReportsID[0]?.step10_Sistema_Protecionais_Carregamento
                ?.status === "Concluído"
                ? "Dos sistemas protecionais do carregamento - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step10_Sistema_Protecionais_Carregamento
                    ?.status === "Aprovado"
                ? "Dos sistemas protecionais do carregamento - Status: Revisão concluída"
                : snapshotReportsID[0]?.step10_Sistema_Protecionais_Carregamento
                    ?.status === "Cancelado"
                ? "Dos sistemas protecionais do carregamento - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step10_Sistema_Protecionais_Carregamento
                    ?.status === "Revisando"
                ? "Dos sistemas protecionais do carregamento - Status: Revisando..."
                : snapshotReportsID[0]?.step10_Sistema_Protecionais_Carregamento
                    ?.status || "Formalizando"
                ? "Dos sistemas protecionais do carregamento - Status: Formalizando"
                : "Dos sistemas protecionais do carregamento - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step9_Gerenciamento_Risco?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step9_Gerenciamento_Risco?.status ===
                "Aprovado" ||
              snapshotReportsID[0]?.step9_Gerenciamento_Risco?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step9_Gerenciamento_Risco?.status ===
                "Revisando"
                ? snapshotReportsID[0]?.step10_Sistema_Protecionais_Carregamento
                    ?.status || "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Declaração do motorista e ajudante (s)"
            numberIcon="11"
            statusTitle={
              snapshotReportsID[0]?.step11_Declaracao_Motorista_Ajudante
                ?.status === "Concluído"
                ? "Declaração do motorista e ajudante (s) - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step11_Declaracao_Motorista_Ajudante
                    ?.status === "Aprovado"
                ? "Declaração do motorista e ajudante (s) - Status: Revisão concluída"
                : snapshotReportsID[0]?.step11_Declaracao_Motorista_Ajudante
                    ?.status === "Cancelado"
                ? "Declaração do motorista e ajudante (s) - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step11_Declaracao_Motorista_Ajudante
                    ?.status === "Revisando"
                ? "Declaração do motorista e ajudante (s) - Status: Revisando..."
                : snapshotReportsID[0]?.step11_Declaracao_Motorista_Ajudante
                    ?.status || "Formalizando"
                ? "Declaração do motorista e ajudante (s) - Status: Formalizando"
                : "Declaração do motorista e ajudante (s) - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step10_Sistema_Protecionais_Carregamento
                ?.status === "Concluído" ||
              snapshotReportsID[0]?.step10_Sistema_Protecionais_Carregamento
                ?.status === "Aprovado" ||
              snapshotReportsID[0]?.step10_Sistema_Protecionais_Carregamento
                ?.status === "Cancelado" ||
              snapshotReportsID[0]?.step10_Sistema_Protecionais_Carregamento
                ?.status === "Revisando"
                ? snapshotReportsID[0]?.step11_Declaracao_Motorista_Ajudante
                    ?.status || "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Gerenciamento de risco – depósito"
            numberIcon="12"
            statusTitle={
              snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                ?.status === "Concluído"
                ? "Gerenciamento de risco – depósito - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                    ?.status === "Aprovado"
                ? "Gerenciamento de risco – depósito - Status: Revisão concluída"
                : snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                    ?.status === "Cancelado"
                ? "Gerenciamento de risco – depósito - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                    ?.status === "Revisando"
                ? "Gerenciamento de risco – depósito - Status: Revisando..."
                : snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                    ?.status || "Formalizando"
                ? "Gerenciamento de risco – depósito - Status: Formalizando"
                : "Gerenciamento de risco – depósito - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step11_Declaracao_Motorista_Ajudante
                ?.status === "Concluído" ||
              snapshotReportsID[0]?.step11_Declaracao_Motorista_Ajudante
                ?.status === "Aprovado" ||
              snapshotReportsID[0]?.step11_Declaracao_Motorista_Ajudante
                ?.status === "Cancelado" ||
              snapshotReportsID[0]?.step11_Declaracao_Motorista_Ajudante
                ?.status === "Revisando"
                ? snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                    ?.status || "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Dos locais do evento"
            numberIcon="13"
            statusTitle={
              snapshotReportsID[0]?.step13_Locais_do_Evento?.status ===
              "Concluído"
                ? "Dos locais do evento - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step13_Locais_do_Evento?.status ===
                  "Aprovado"
                ? "Dos locais do evento - Status: Revisão concluída"
                : snapshotReportsID[0]?.step13_Locais_do_Evento?.status ===
                  "Cancelado"
                ? "Dos locais do evento - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step13_Locais_do_Evento?.status ===
                  "Revisando"
                ? "Dos locais do evento - Status: Revisando..."
                : snapshotReportsID[0]?.step13_Locais_do_Evento?.status ||
                  "Formalizando"
                ? "Dos locais do evento - Status: Formalizando"
                : "Dos locais do evento - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                ?.status === "Concluído" ||
              snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                ?.status === "Aprovado" ||
              snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                ?.status === "Cancelado" ||
              snapshotReportsID[0]?.step12_Gerenciamento_Risco_Deposito
                ?.status === "Revisando"
                ? snapshotReportsID[0]?.step13_Locais_do_Evento?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Das averiguações"
            numberIcon="14"
            statusTitle={
              snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.status ===
              "Concluído"
                ? "Das averiguações - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.status ===
                  "Aprovado"
                ? "Das averiguações - Status: Revisão concluída"
                : snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.status ===
                  "Cancelado"
                ? "Das averiguações - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.status ===
                  "Revisando"
                ? "Das averiguações - Status: Revisando..."
                : snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.status ||
                  "Formalizando"
                ? "Das averiguações - Status: Formalizando"
                : "Das averiguações - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step13_Locais_do_Evento?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step13_Locais_do_Evento?.status ===
                "Aprovado" ||
              snapshotReportsID[0]?.step13_Locais_do_Evento?.status ===
                "Revisando" ||
              snapshotReportsID[0]?.step13_Locais_do_Evento?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step13_Locais_do_Evento?.status ===
                "Revisando"
                ? snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Recuperação da carga"
            numberIcon="15"
            statusTitle={
              snapshotReportsID[0]?.step15_Recuperacao_Carga?.status ===
              "Concluído"
                ? "Recuperação da carga - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step15_Recuperacao_Carga?.status ===
                  "Aprovado"
                ? "Recuperação da carga - Status: Revisão concluída"
                : snapshotReportsID[0]?.step15_Recuperacao_Carga?.status ===
                  "Cancelado"
                ? "Recuperação da carga - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step15_Recuperacao_Carga?.status ===
                  "Revisando"
                ? "Recuperação da carga - Status: Revisando..."
                : snapshotReportsID[0]?.step15_Recuperacao_Carga?.status ||
                  "Formalizando"
                ? "Recuperação da carga - Status: Formalizando"
                : "Recuperação da carga - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.status ===
                "Aprovado" ||
              snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step14_Resumo_Averiguacoes?.status ===
                "Revisando"
                ? snapshotReportsID[0]?.step15_Recuperacao_Carga?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Anexos fotográficos"
            numberIcon="16"
            statusTitle={
              snapshotReportsID[0]?.step16_Anexos_Fotograficos?.status ===
              "Concluído"
                ? "Anexos fotográficos - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step16_Anexos_Fotograficos?.status ===
                  "Aprovado"
                ? "Anexos fotográficos - Status: Revisão concluída"
                : snapshotReportsID[0]?.step16_Anexos_Fotograficos?.status ===
                  "Cancelado"
                ? "Anexos fotográficos - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step16_Anexos_Fotograficos?.status ===
                  "Revisando"
                ? "Anexos fotográficos - Status: Revisando..."
                : snapshotReportsID[0]?.step16_Anexos_Fotograficos?.status ||
                  "Formalizando"
                ? "Anexos fotográficos - Status: Formalizando"
                : "Anexos fotográficos - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step15_Recuperacao_Carga?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step15_Recuperacao_Carga?.status ===
                "Aprovado" ||
              snapshotReportsID[0]?.step15_Recuperacao_Carga?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step15_Recuperacao_Carga?.status ===
                "Revisando"
                ? snapshotReportsID[0]?.step16_Anexos_Fotograficos?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            title="Conclusão"
            numberIcon="17"
            statusTitle={
              snapshotReportsID[0]?.step17_Conclusao?.status === "Concluído"
                ? "Conclusão - Status: Concluído, pronto para revisão"
                : snapshotReportsID[0]?.step17_Conclusao?.status === "Cancelado"
                ? "Conclusão - Status: Solicitado Cancelado"
                : snapshotReportsID[0]?.step17_Conclusao?.status === "Aprovado"
                ? "Conclusão - Status: Revisão concluída"
                : snapshotReportsID[0]?.step17_Conclusao?.status === "Revisando"
                ? "Conclusão - Status: Revisando..."
                : snapshotReportsID[0]?.step17_Conclusao?.status ||
                  "Formalizando"
                ? "Conclusão - Status: Formalizando"
                : "Conclusão - Status: Bloqueado"
            }
            status={
              snapshotReportsID[0]?.step16_Anexos_Fotograficos?.status ===
                "Concluído" ||
              snapshotReportsID[0]?.step16_Anexos_Fotograficos?.status ===
                "Aprovado" ||
              snapshotReportsID[0]?.step16_Anexos_Fotograficos?.status ===
                "Cancelado" ||
              snapshotReportsID[0]?.step16_Anexos_Fotograficos?.status ===
                "Revisando"
                ? snapshotReportsID[0]?.step17_Conclusao?.status ||
                  "Formalizando"
                : "Neutro"
            }
          />
          <StepItem
            path="/register/#/"
            statusTitle={
              snapshotReportsID[0]?.status === "Revisando"
                ? "Revisando..."
                : "Revisão concluída"
            }
            title={
              snapshotReportsID[0]?.status === "Revisando"
                ? "Revisando..."
                : "Revisão concluída"
            }
            numberIcon={<HourglassSimpleMedium size={16} />}
            status={
              snapshotReportsID[0]?.status === "Emitido"
                ? "Aprovado"
                : snapshotReportsID[0]?.status === "Formalizando"
                ? "Neutro"
                : snapshotReportsID[0]?.status
            }
          />
          <StepItem
            active={numberStep === "18" ? "Active" : " "}
            onStepNumber={() => {
              setNumberStep("18");
            }}
            title="Emitir relatório"
            numberIcon={<Sparkle size={16} />}
            statusTitle={
              snapshotReportsID[0]?.status === "Revisando" ||
              snapshotReportsID[0]?.status === "Formalizando" ||
              snapshotReportsID[0]?.status === "Cancelado"
                ? "Emitir relatório - Status: Formalizando"
                : "Emitir relatório - Status: Revisão concluída"
            }
            status={
              snapshotReportsID[0]?.status === "Revisando" ||
              snapshotReportsID[0]?.status === "Formalizando" ||
              snapshotReportsID[0]?.status === "Cancelado"
                ? "Neutro"
                : snapshotReportsID[0]?.status
            }
          />
        </SidebarSteps>
        <LayoutContent>
          {snapshotReportsID.map((report) => {
            return (
              <Container key={report.id}>
                <HeaderReport
                  title="Relatório de Averiguação"
                  n_processo={report.id}
                  cliente={report.cliente}
                  status_relatorio={report.status}
                  statusIcon={
                    report.status === "Formalizando" ? (
                      <ListBullets size={10} />
                    ) : report.status === "Revisando" ? (
                      <HourglassSimpleMedium size={10} />
                    ) : report.status === "Aprovado" ? (
                      <Checks size={10} />
                    ) : report.status === "Emitido" ? (
                      <Sparkle size={10} />
                    ) : (
                      <X size={10} />
                    )
                  }
                  data_inicio_relatorio={new Date(
                    report.created_in
                  ).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                  data_prevista_termino_relatorio={new Date(
                    report.created_in
                  ).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                  relatorio_criado_por={report.user.name}
                  supervisor_responsavel={report.manager}
                />

                <Content>
                  {numberStep === "1" ? (
                    <Step1_Cliente_Segurado
                      onClickButton={() => setNumberStep("2")}
                      reportId={report.id}
                      n_processo={report.id}
                      cliente={report.cliente}
                      cnpj={report.cnpj}
                      logradouro={
                        report.step1_Cliente_Segurado?.logradouro as string
                      }
                      bairro={report.step1_Cliente_Segurado?.bairro as string}
                      localidade={report.step1_Cliente_Segurado?.localidade as string}
                      uf={report.step1_Cliente_Segurado?.uf as string}
                      cep={report.step1_Cliente_Segurado?.cep as string}
                      telefone={
                        report.step1_Cliente_Segurado?.telefone as string
                      }
                      celular={report.step1_Cliente_Segurado?.celular as string}
                      email={report.step1_Cliente_Segurado?.email as string}
                      contato={report.step1_Cliente_Segurado?.contato as string}
                      status={report.step1_Cliente_Segurado?.status as string}
                      notas={report.step1_Cliente_Segurado?.notas as string}
                    />
                  ) : numberStep === "2" ? (
                    <Step2_Caracteristica_Sinistro
                      reportId={report.id}
                      n_processo={report.id}
                      seguradora={
                        report.step2_Caracteristica_Sinistro
                          ?.seguradora as string
                      }
                      natureza_do_evento={
                        report.step2_Caracteristica_Sinistro
                          ?.natureza_do_evento as string
                      }
                      carga_embarcada={
                        report.step2_Caracteristica_Sinistro
                          ?.carga_embarcada as string
                      }
                      valor_da_carga={
                        report.step2_Caracteristica_Sinistro
                          ?.valor_da_carga as string
                      }
                      status={
                        report.step2_Caracteristica_Sinistro?.status as string
                      }
                      notas={
                        report.step2_Caracteristica_Sinistro?.notas as string
                      }
                    />
                  ) : numberStep === "18" ? (
                    <ContentEmitirRelatorio>
                      <LottieContent>
                        <LottieConfetes>
                          <Lottie
                            style={{ width: 500, height: 300 }}
                            animationData={animationConfetes}
                            loop={true}
                            autoplay={true}
                          />
                        </LottieConfetes>
                        <LottieSuccess>
                          <Lottie
                            style={{
                              width: 80,
                              height: 80,
                            }}
                            animationData={animationSuccess}
                            loop={true}
                            autoplay={true}
                          />
                        </LottieSuccess>
                      </LottieContent>

                      <div>
                        <Image
                          src="/img/ImgReportSuccess.svg"
                          alt="Alerta"
                          width={152}
                          height={139}
                        />
                      </div>
                      <p>Processo aprovado</p>
                      <div>
                        <h1>Liberado para emissão do relatório</h1>
                      </div>
                      <ButtonReport
                        type="button"
                        onClick={() => router.push(`/reports/pdf/${report.id}`)}
                        TextTitle="Emitir relatório em PDF"
                        IconLeft={<FilePdf size={32} />}
                        IconRight={<CaretRight size={32} />}
                      />
                      <span>
                        Caso tenha duvidas de como gerar um relatório, clique no
                        botão de ajuda.
                      </span>
                    </ContentEmitirRelatorio>
                  ) : null}
                </Content>
              </Container>
            );
          })}
        </LayoutContent>
      </LayoutContainer>
    </Container>
  );
}
