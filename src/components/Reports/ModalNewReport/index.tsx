import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CaretRight, FilePlus, LockOpen } from "phosphor-react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import Select from "react-select";


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
import { NewSelect2 } from "../NewSelect2";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IOption {
  readonly value: string;
  readonly label: string;
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
    //status: z.string(),
    statusOptions: z.object({
      value: z.string(),
      label: z.string(),
    }),
    created_in: z.string().default(dateNow),
    finished_in: z.string(),
    //revisor: z.string(),
    revisorOptions: z.object({
      value: z.string(),
      label: z.string(),
    }),
    //manager: z.string(),
    managerOptions: z.object({
      value: z.string(),
      label: z.string(),
    }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setValue,
    setFocus,
    control,
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
      await usePostReportsUser({
        cnpj: data.cnpj,
        cliente: data.cliente,
        status: data.statusOptions.value,
        created_in: data.created_in,
        finished_in: data.finished_in,
        revisor: data.revisorOptions.value,
        manager: data.managerOptions.value,
      } as IReportsV2, userProfile[0] as IUsers);
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
        setFocus("statusOptions");
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
        statusOptions:{
          value: "",
          label: "",
        },
        finished_in: "",
        revisorOptions:{
          value: "",
          label: "",
        },
        managerOptions: {
          value: "",
          label: "",
        },
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
                  label="⚡️ CNPJ:"
                  name="cnpj"
                  placeholder="Informe o CNPJ do cliente segurado"
                  register={register}
                  required={true}
                  error={errors.cnpj ? errors.cnpj.message : " "}
                />
              </div>
              <div className="_cliente">
                <InputForms
                  label="CLIENTE SEGURADO:"
                  name="cliente"
                  placeholder="Informe o nome do cliente segurado"
                  disabled={false}
                  register={register}
                  required={true}
                  error={errors.cliente ? errors.cliente.message : " "}
                />
              </div>
              <div className="_status">
                {/* <SelectInputForms
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
                /> */}
                 <NewSelect2 label="STATUS:">
                        <Controller
                          name="statusOptions"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              options={[
                                { value: "Formalizando", label: "Formalizando" },
                                { value: "Revisando", label: "Revisando" },
                                { value: "Aprovado", label: "Aprovado" },
                                { value: "Emitido", label: "Emitido" },
                                { value: "Cancelado", label: "Cancelado" },
                              ]}
                              placeholder="Selecione.."
                              isSearchable={false}
                              isClearable={false}
                              //menuPlacement="top"
                              required
                              // defaultValue={
                              //   status
                              //     ? {
                              //         value: status,
                              //         label: status,
                              //       }
                              //     : null
                              // }
                              styles={{
                                indicatorSeparator: (provided, state) => ({
                                  ...provided,
                                  position: "absolute",
                                  top: "-23px",
                                  bottom: "0",
                                  display: "none",
                                  height: "40px",
                                }),
                                clearIndicator: (provided, state) => ({
                                  ...provided,
                                  position: "absolute",
                                  top: "2px",
                                  width: "30px",
                                  right: "35px",
                                  color: "#AA2834",
                                  ":hover": {
                                    color: "#F75A68",
                                  },
                                  cursor: "pointer",
                                  display: 'none'
                                }),
                                indicatorsContainer: (provided, state) => ({
                                  ...provided,
                                  width: "40px",
                                  height: "12px",
                                  cursor: "pointer",
                                  svg: {
                                    color: "#0078BE",
                                  },
                                  ":hover": {
                                    svg: {
                                      color: "#3996E0",
                                    },
                                  },
                                }),
                                
                                container: (provided, state) => ({
                                  ...provided,
                                  width: "245px",
                                  height: "31px",
                                  //right: "1rem",
                                  //left: "1rem",
                                }),
                                control: (provided, state) => ({
                                  ...provided,
                                  position: "relative",
                                  width: "260px",
                                  right: "1rem",
                                 
                                  border: "none",
                                  boxShadow: "none",
                                  backgroundColor: "transparent",
                                  fontSize: "1.6rem",
                                  color: "#121214",
                                  fontWeight: "bold",
                                  fontFamily: "__Inter_9c9965",
                                  cursor: "pointer",
                                }),
                                option: (provided, state) => ({
                                  ...provided,
                                  color: state.isSelected ? "white" : "black",
                                  backgroundColor: state.isSelected
                                    ? "#3996E0"
                                    : "white",
                                  ":hover": {
                                    backgroundImage:
                                      "linear-gradient(90deg, rgba(228, 235, 254, 1) 0%, rgba(211, 243, 240, 1) 100%)",
                                    color: "#121214",
                                  },

                                  fontSize: "1.4rem",
                                  cursor: "pointer",
                                }),
                                placeholder: (provided, state) => ({
                                  ...provided,
                                  color: "#7C7C8A",
                                  fontSize: "1.2rem",
                                  fontWeight: "normal",
                                }),
                              }}
                            />
                          )}
                        />
                 </NewSelect2>
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
                {/* <SelectInputForms
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
                /> */}
                <NewSelect2 label="ANALISTA DE REVISÃO:">
                        <Controller
                          name="revisorOptions"
                          control={control}
                          render={({ field }) => (
                            <Select 
                              {...field}
                              options={allUsers
                                ?.filter((user) => user.perfil === "Revisor")
                                .map((revisor) => {
                                  return {
                                    value: revisor.name,
                                    label: revisor.name,
                                  };
                                })}
                              placeholder="Selecione.."
                              isSearchable={false}
                              isClearable={false}
                              required
                              styles={{
                                indicatorSeparator: (provided, state) => ({
                                  ...provided,
                                  position: "absolute",
                                  top: "-23px",
                                  bottom: "0",
                                  height: "40px",
                                  display: "none",
                                }),
                                clearIndicator: (provided, state) => ({
                                  ...provided,
                                  position: "absolute",
                                  top: "2px",
                                  width: "30px",
                                  right: "35px",
                                  color: "#AA2834",
                                  ":hover": {
                                    color: "#F75A68",
                                  },
                                  cursor: "pointer",
                                  display: 'none'
                                }),
                                indicatorsContainer: (provided, state) => ({
                                  ...provided,
                                  width: "40px",
                                  height: "12px",
                                  cursor: "pointer",
                                  svg: {
                                    color: "#0078BE",
                                  },
                                  ":hover": {
                                    svg: {
                                      color: "#3996E0",
                                    },
                                  },
                                }),
                                
                                container: (provided, state) => ({
                                  ...provided,
                                  width: "245px",
                                  height: "31px",
                                  right: "1rem",
                                }),
                                control: (provided, state) => ({
                                  ...provided,
                                  border: "none",
                                  boxShadow: "none",
                                  backgroundColor: "transparent",
                                  fontSize: "1.6rem",
                                  color: "#121214",
                                  fontWeight: "bold",
                                  fontFamily: "__Inter_9c9965",
                                  cursor: "pointer",
                                }),
                                option: (provided, state) => ({
                                  ...provided,
                                  color: state.isSelected ? "white" : "black",
                                  backgroundColor: state.isSelected
                                    ? "#3996E0"
                                    : "white",
                                  ":hover": {
                                    backgroundImage:
                                      "linear-gradient(90deg, rgba(228, 235, 254, 1) 0%, rgba(211, 243, 240, 1) 100%)",
                                    color: "#121214",
                                  },

                                  fontSize: "1.4rem",
                                  cursor: "pointer",
                                }),
                                placeholder: (provided, state) => ({
                                  ...provided,
                                  color: "#7C7C8A",
                                  fontSize: "1.2rem",
                                  fontWeight: "normal",
                                }),
                              }}
                            />
                          )}
                        />
                  </NewSelect2>
              </div>
              <div className="_supervisor">
                {/* <SelectInputForms
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
                /> */}

                <NewSelect2 label="GESTOR RESPONSÁVEL:">
                        <Controller
                          name="managerOptions"
                          control={control}
                          render={({ field }) => (
                            <Select
                              {...field}
                              options={allUsers
                                ?.filter((user) => user.perfil === "Supervisor")
                                .map((manager) => {
                                  return {
                                    value: manager.name,
                                    label: manager.name,
                                  };
                                })}
                              placeholder="Selecione.."
                              isSearchable={false}
                              isClearable={false}
                              required
                              styles={{
                                indicatorSeparator: (provided, state) => ({
                                  ...provided,
                                  position: "absolute",
                                  top: "-23px",
                                  bottom: "0",
                                  height: "40px",
                                  display: "none",
                                }),
                                clearIndicator: (provided, state) => ({
                                  ...provided,
                                  position: "absolute",
                                  top: "2px",
                                  width: "30px",
                                  right: "35px",
                                  color: "#AA2834",
                                  ":hover": {
                                    color: "#F75A68",
                                  },
                                  cursor: "pointer",
                                  display: 'none'
                                }),
                                indicatorsContainer: (provided, state) => ({
                                  ...provided,
                                  width: "40px",
                                  height: "12px",
                                  cursor: "pointer",
                                  svg: {
                                    color: "#0078BE",
                                  },
                                  ":hover": {
                                    svg: {
                                      color: "#3996E0",
                                    },
                                  },
                                }),
                                
                                container: (provided, state) => ({
                                  ...provided,
                                  width: "245px",
                                  height: "31px",
                                  right: "1rem",
                                }),
                                control: (provided, state) => ({
                                  ...provided,
                                  border: "none",
                                  boxShadow: "none",
                                  backgroundColor: "transparent",
                                  fontSize: "1.6rem",
                                  color: "#121214",
                                  fontWeight: "bold",
                                  fontFamily: "__Inter_9c9965",
                                  cursor: "pointer",
                                }),
                                option: (provided, state) => ({
                                  ...provided,
                                  color: state.isSelected ? "white" : "black",
                                  backgroundColor: state.isSelected
                                    ? "#3996E0"
                                    : "white",
                                  ":hover": {
                                    backgroundImage:
                                      "linear-gradient(90deg, rgba(228, 235, 254, 1) 0%, rgba(211, 243, 240, 1) 100%)",
                                    color: "#121214",
                                  },

                                  fontSize: "1.4rem",
                                  cursor: "pointer",
                                }),
                                placeholder: (provided, state) => ({
                                  ...provided,
                                  color: "#7C7C8A",
                                  fontSize: "1.2rem",
                                  fontWeight: "normal",
                                }),
                              }}
                            />
                          )}
                        />
                  </NewSelect2>


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
