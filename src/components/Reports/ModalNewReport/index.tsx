import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CaretRight, FilePlus, LockOpen } from "phosphor-react";

import { useForm, SubmitHandler } from "react-hook-form";

import { ButtonReport } from "@components/Reports/Button";
import { Modal } from "@components/Reports/Modal";
import { InputForms } from "../InputForms";
import { SelectInputForms } from "../SelectInputForms";

import Lottie from "lottie-react";
import LoadingForms from "../../../../public/lottieFiles/LoadingForms.json";

import { useOnSnapshotUserId } from "@hooks/useFirebase/useOnSnapshotUserId";
import { useOnSnapshotAllUsers } from "@hooks/useFirebase/useOnSnapshotAllUsers";
import { usePostReportsUser } from "@hooks/useApi/reports/usePostReportsUser";
import { generateDate } from "@services/utils/date";

import { IReportsV2, IUsers } from "src/@types/typesReport";

import {
  BackdropSubmitting,
  ContainerModalNewReport,
  FormReport,
  ContentInputs,
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
  const dateNow = generateDate();

  type IFormValues = z.infer<typeof schemaCadastroReport>;

  const schemaCadastroReport = z.object({
    cnpj: z.string().min(18, { message: "❗cnpj" }),
    cliente: z.string(),
    status: z.string(),
    created_in: z.string().default(dateNow),
    finished_in: z.string(),
    revisor: z.string(),
    manager: z.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setValue,
    setFocus,
    formState: { errors },
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

  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    try {
      await usePostReportsUser(data as IReportsV2, userProfile[0] as IUsers);
    } catch (error) {
      console.log("Erro ao cadastrar cliente segurado");
    }
  };

  const handleBlurCnpj = (e: any) => {
    const value = e.target.value;
    const cnpjFormatado = value.replace(/[^\d]+/g, "");

    if (cnpjFormatado?.length < 14) {
      return;
    }
    fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjFormatado}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValue("cliente", data?.razao_social);
        setFocus("status");
        reset({
          ...data,
          cnpj: value,
        });
      });
  };

  const HandleOnClose = () => {
    onClose();
    reset(
      {
        cnpj: "",
        cliente: "",
        status: "",
        finished_in: "",
        revisor: "",
        manager: "",
      },
    );
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
            onClose={HandleOnClose}
            iconHeaderModal="/icons/IconsModal/IconAddNewReport.svg"
            titleModal="Novo Relatório"
            descriptionModal="Preencha os campos abaixo para criar um novo relatório."
          >
            <ContentInputs>
              <div className="_cnpj">
                <InputForms
                  onBlur={handleBlurCnpj}
                  label="⚡️ CNPJ"
                  name="cnpj"
                  register={register}
                  required={true}
                  error={errors.cnpj ? errors.cnpj.message : " "}
                />
              </div>
              <div className="_cliente">
                <InputForms
                  label="CLIENTE/SEGURADO:"
                  name="cliente"
                  disabled={false}
                  register={register}
                  required={true}
                  error={errors.cliente ? errors.cliente.message : " "}
                />
              </div>
              <div className="_status">
                <SelectInputForms
                  options={[
                    { value: "Formalizando", label: "Formalizando" },
                    { value: "Revisando", label: "Revisando" },
                    { value: "Aprovado", label: "Aprovado" },
                    { value: "Emitido", label: "Emitido" },
                    { value: "Cancelado", label: "Cancelado" },
                  ]}
                  label="STATUS:"
                  name="status"
                  register={register}
                  required
                  error={errors.status?.message}
                />
              </div>
              <div className="_created_in">
                <InputForms
                  label="DATA DE CRIAÇÃO:"
                  name="created_in"
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  disabled
                  register={register}
                  required
                  error={errors.created_in?.message}
                  type="date"
                />
              </div>
              <div className="_finished_in">
                <InputForms
                  label="PREVISÃO DE ENTREGA:"
                  name="finished_in"
                  register={register}
                  required
                  error={errors.finished_in?.message}
                  type="date"
                />
              </div>
              <div className="_user">
                <div className="Label">ANALISTA RESPONSÁVEL:</div>
                <div className="TextName">{userProfile[0]?.name}</div>
              </div>
              <div className="_revisor">
                <SelectInputForms
                  options={allUsers
                    ?.filter((user) => user.perfil === "Revisor")
                    .map((revisor) => {
                      return {
                        value: revisor.name,
                        label: revisor.name,
                      };
                    })}
                  label="ANALISTA DE REVISÃO:"
                  name="revisor"
                  register={register}
                  required
                  error={errors.revisor?.message}
                />
              </div>
              <div className="_supervisor">
                <SelectInputForms
                  options={allUsers
                    ?.filter((user) => user.perfil === "Supervisor")
                    .map((manager) => {
                      return {
                        value: manager.name,
                        label: manager.name,
                      };
                    })}
                  label="GESTOR RESPONSÁVEL:"
                  name="manager"
                  register={register}
                  required
                  error={errors.manager?.message}
                />
              </div>
            </ContentInputs>

            <div className="ButtonCreateReport">
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
