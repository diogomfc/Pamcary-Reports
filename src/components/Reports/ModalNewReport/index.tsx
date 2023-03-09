import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CaretRight, FilePlus, LockOpen } from "phosphor-react";

import { useForm, SubmitHandler } from "react-hook-form";

import { ButtonReport } from "@components/Reports/Button";
import { Modal } from "@components/Reports/Modal";
import { SelectInput } from "@components/Reports/SelectInput";
import { InputText } from "@components/Reports/TextInput";

import Lottie from "lottie-react";
import animationLoding1to2 from "../../../../public/lottieFiles/LoadingStep1to2.json";
import animationUnlockedNextStep from "../../../../public/lottieFiles/UnlockedNextStep.json";
import LoadingForms from "../../../../public/lottieFiles/LoadingForms.json";

import { useOnSnapshotAllReports } from "@hooks/useFirebase/useOnSnapshotAllReports";
import { useOnSnapshotUserId } from "@hooks/useFirebase/useOnSnapshotUserId";
import { useOnSnapshotAllUsers } from "@hooks/useFirebase/useOnSnapshotAllUsers";
import { usePostReportsUser } from "@hooks/useApi/reports/usePostReportsUser";
import { generateDate } from "@services/utils/date";

import { IReportsV2, IUsers } from "src/@types/typesReport";

import {
  BackdropSubmitting,
  BackdropSubmitSuccessful,
  ContainerModalNewReport,
  ContainerModalProximaEtapa,
  FormReport,
} from "./styles";



interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalNewReport({ isOpen, onClose }: ModalProps) {
  const router = useRouter();

  //Buscar perfil do usuário logado
  const { userProfile } = useOnSnapshotUserId();
  const { allUsers } = useOnSnapshotAllUsers();
  const { allReportsSnapshot } = useOnSnapshotAllReports();

   //passar data e hora atual para o campo created_in
  const dateNow = generateDate();

  type IFormValues = z.infer<typeof schemaCadastroReport>;

  const schemaCadastroReport = z.object({
    //id: z.string(),
    cliente: z
      .string()
      .min(3, { message: "Precisa informa o nome do Cliente/Segurado" }),
    created_in: z.string().default(dateNow),
    finished_in: z.string(),
    status: z.string(),
    manager: z.string(),
    revisor: z.string(),
    //user: z.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors},
  } = useForm<IFormValues>({
    resolver: zodResolver(schemaCadastroReport),
  });

  const { isSubmitting, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitting) {
      onClose();
      console.log("loading...");
    }
    if (isSubmitSuccessful) {
      reset();
      router.push("/reports/list");
      console.log("Cadastrado efetuado com sucesso");
    }
  }, [isSubmitting, isSubmitSuccessful]);
  
   const onClickButton = () => {
    onClose();
  };

  //Função para salvar os dados do relatório no banco de dados
  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    try {
      await usePostReportsUser(data as IReportsV2, userProfile[0] as IUsers);
    } catch (error) {
      console.log("Erro ao cadastrar cliente segurado");
    }
  };

  return (
    <>
       {isSubmitting && (
         <BackdropSubmitting>
         <div>
           <Lottie
             style={{ width: "350px", height: "350px" }}
             animationData={LoadingForms}
             loop={true}
             autoplay={true}
           />
           <span>Gerando novo relatório. Aguarde...</span>
         </div>
       </BackdropSubmitting>
       )}
      <ContainerModalNewReport>
        <FormReport onSubmit={handleSubmit(onSubmit)}>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            iconHeaderModal="/icons/IconsModal/IconAddNewReport.svg"
            titleModal="Novo Relatório"
            descriptionModal="Preencha os campos abaixo para criar um novo relatório."
          >
            <div className="InputNameCliente">
              <InputText
                label="Cliente/Segurado:"
                name="cliente"
                register={register}
                required
                error={errors.cliente?.message}
              />
            </div>
            <div className="StatusDataPrevisao">
              <SelectInput
                options={[
                  { value: "Formalizando", label: "Formalizando" },
                  { value: "Revisando", label: "Revisando" },
                  { value: "Aprovado", label: "Aprovado" },
                  { value: "Emitido", label: "Emitido" },
                  { value: "Cancelado", label: "Cancelado" },
                ]}
                label="Status Relatório:"
                name="status"
                register={register}
                required
                error={errors.status?.message}
              />
              <InputText
                label="Data Início:"
                name="created_in"
                defaultValue={new Date().toISOString().slice(0, 10)}
                disabled
                register={register}
                required
                error={errors.created_in?.message}
                type="date"
              />
              <InputText
                label="Previsão Término:"
                name="finished_in"
                register={register}
                required
                error={errors.finished_in?.message}
                type="date"
              />
            </div>
            <div className="UserSupervisor">
              <SelectInput
                options={
                  allUsers
                    ?.filter((user) => user.perfil === "Revisor")
                    .map((revisor) => {
                      return {
                        value: revisor.name,
                        label: revisor.name,
                      };
                    })
                }
                label="Revisor(a):"
                name="revisor"
                register={register}
                required
                error={errors.revisor?.message}
              />
              <SelectInput
                options={
                  allUsers
                    ?.filter((user) => user.perfil === "Supervisor")
                    .map((supervisor) => {
                      return {
                        value: supervisor.name,
                        label: supervisor.name,
                      };
                    })
                }
                label="Supervisor(a):"
                name="manager"
                register={register}
                required
                error={errors.manager?.message}
              />
            </div>
            <div className="ButtonCreateReport">
            <ButtonReport
              onClick={onClickButton}
              TextTitle="Cancelar"
            />
              <ButtonReport 
              type="submit" 
              TextTitle="Gera Relatório" 
              IconLeft={<FilePlus size={32} />}
              IconRight={<CaretRight size={32} />}
              />
            </div>
          </Modal>
        </FormReport>
      </ContainerModalNewReport>
    </>
  );
}
