import Link from "next/link";
import { Container, Content } from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface StepsProps {
  title: string;
  numberIcon: string | JSX.Element;
  status: string;
  statusTitle?: string;
  path?: string;
  active?: string;
  //numberSteps?: string;
  //setNumberStep?: (number: number) => void;
  onStepNumber?: () => void;
}

//STATUS: 'Neutro' | 'Formalizando' | 'Revisando' | 'Aprovado' | 'Concluído' | 'Emitido' | 'Cancelado'

export function StepItem({
  title,
  statusTitle,
  status,
  numberIcon,
  path,
  active,
  onStepNumber,
}: StepsProps): JSX.Element {
  return (
    <Container>
      <ToastContainer  position="top-center"/>
      {status === "Concluído" || status === "Formalizando" ? (
        <Content onClick={onStepNumber} title={statusTitle}>
          <div id={status} className={active}>
            <div className="CircleStepNeutro">
              <div className="CircleStep">
                <span>{numberIcon}</span>
              </div>
            </div>
            <div className="TitleStep">
              <h1>{title}</h1>
            </div>
          </div>
        </Content>
      ) : (
        <Content
          onClick={() => {
            status === "Revisando"
              ? toast.info("Bloqueado para revisão, aguarde...", {
                  className: "ToastInfo",
                })
              : status === "Aprovado"
              ? toast.success(
                  "Revisão Aprovada! relatório já está liberado para download",
                  {
                    className: "ToastSuccess",
                  }
                )
              : toast.warning(
                  `Para desbloquear o passo ${numberIcon} - ${title}, você precisa concluir o passo anterior.`,
                  {
                    className: "ToastWarning",
                  }
                );
          }}
          title={statusTitle}
        >
          <div id={status} className={active}>
            <div className="CircleStepNeutro">
              <div className="CircleStep">
                <span>{numberIcon}</span>
              </div>
            </div>
            <div className="TitleStep">
              <h1>{title}</h1>
            </div>
          </div>
        </Content>
      )}
    </Container>
  );
}
