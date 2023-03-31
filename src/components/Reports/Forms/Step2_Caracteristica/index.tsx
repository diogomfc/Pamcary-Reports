import { useEffect, useState } from "react";
import {
  useForm,
  SubmitHandler,
  Controller,
  UseFormRegister,
} from "react-hook-form";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CaretRight, FloppyDisk, NotePencil } from "phosphor-react";

import Lottie from "lottie-react";
import animationLoding1to2 from "../../../../../public/lottieFiles/LoadingStep1to2.json";

import { Heading } from "@components/Reports/Heading";
import { ButtonReport } from "@components/Reports/Button";
import { TextAreaEditor } from "@components/Reports/TextArea";
import { InputForms } from "@components/Reports/InputForms";
import { NewSelect2, NewSelect3 } from "@components/Reports/NewSelect2";

import { usePostStep2ReportId } from "@hooks/useApi/step2/usePostStep2ReportId";
import { usePostStep3ReportId } from "@hooks/useApi/step3/usePostStep3ReportId";

import { I2_Caracteristica_Sinistro } from "src/@types/typesReport";
import { I3_Cronologia_Sinistro } from "src/@types/typesReport";

import {
  Container,
  FormReport,
  Content,
  ContentButton,
  BoxForm,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  ContentInputsCadastro,
  ContentTextEditor,
  BackdropSubmitting,
} from "./styles";

interface IOption {
  readonly value: string;
  readonly label: string;
}

interface IFormInput {
  reportId: string;
  n_processo: string;
  seguradora: string;
  natureza_do_evento: string;
  optionsNaturezaDoEvento?: IOption[];
  carga_embarcada: string;
  valor_da_carga: string;
  status: string;
  notas: string;
}

export default function Step2_Caracteristica_Sinistro({
  reportId,
  n_processo,
  seguradora,
  natureza_do_evento,
  carga_embarcada,
  valor_da_carga,
  status,
  notas,
}: IFormInput) {
  const [valorCargaMask, setValorCargaMask] = useState(valor_da_carga);

  const schema = z.object({
    seguradora: z.string().min(3, { message: "❗Obrigatório" }),
    // natureza_do_evento: z.string().min(3, { message: "❗natureza do evento" }),
    optionsNaturezaDoEvento: z.object({
      value: z.string(),
      label: z.string(),
    }),
    carga_embarcada: z.string().min(3, { message: "❗Obrigatório" }),
    valor_da_carga: z.string().min(3, { message: "❗Obrigatório" }),
    status: z.string().default("Concluído"),
    notas: z.string().optional(),
  });

  type IFormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState,
    control,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });

  const { isSubmitting, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitting) {
      console.log("loading...");
    }
    if (isSubmitSuccessful) {
      console.log("Cadastrado efetuado com sucesso");
    }
  }, [isSubmitting, isSubmitSuccessful]);

  //Função para enviar os dados do formulário para o banco de dados update ou create
  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    try {
      await usePostStep2ReportId(reportId, {
        seguradora: data.seguradora,
        natureza_do_evento: data.optionsNaturezaDoEvento.value,
        carga_embarcada: data.carga_embarcada,
        valor_da_carga: data.valor_da_carga,
        status: data.status,
        notas: data.notas,
      } as I2_Caracteristica_Sinistro);
      await usePostStep3ReportId(reportId, {
        status: "Formalizando",
      } as I3_Cronologia_Sinistro);
    } catch (error) {
      console.log("Erro ao cadastrar cliente segurado");
    }
  };

  //Mascara para o campo valor da carga
  function handleValorCarga(e: any) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{1,2})$/, ",$1");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    setValorCargaMask(value);
  }

  return (
    <>
      {isSubmitting && (
        <BackdropSubmitting>
          <div>
            <Lottie
              style={{ width: "550px", height: "350px" }}
              animationData={animationLoding1to2}
              loop={true}
              autoplay={true}
            />
            <span>Liberando próxima etapa. Aguarde...</span>
          </div>
        </BackdropSubmitting>
      )}
      <Container key={n_processo}>
        <Content>
          <Heading
            Title="2 - Característica do sinistro"
            Subtitle="Preencha os campos essenciais para o cadastro da característica do sinistro: Seguradora responsável 
            pelo seguro da carga, qual foi a natureza do evento que causou o sinistro, especifique qual era a carga que estava sendo transportada, 
            informe o valor total da carga que foi danificada ou perdida no sinistro"
            />
          <BoxForm>
            <TabsRoot defaultValue="TabCadastro">
              <TabsList>
                <TabsTrigger value="TabCadastro">
                  <h1>CADASTRO</h1>
                </TabsTrigger>

                <TabsTrigger value="TabNotas">
                  <h1>NOTAS</h1>
                </TabsTrigger>
              </TabsList>

              <FormReport as="form" onSubmit={handleSubmit(onSubmit)}>
                <TabsContent value="TabCadastro">
                  <ContentInputsCadastro>
                    <div className="input__seguradora">
                      <InputForms
                        label="SEGURADORA:"
                        name="seguradora"
                        placeholder="Informe a seguradora"
                        disabled={status === "Revisando" ? true : false}
                        defaultValue={seguradora}
                        register={register}
                        required
                        error={
                          errors.seguradora ? errors.seguradora.message : " "
                        }
                      />
                    </div>

                    <div className="input__natureza_do_evento">
                      <NewSelect2 label="NATUREZA DO EVENTO:">
                        <Controller
                          name="optionsNaturezaDoEvento"
                          control={control}
                          render={({ field }) => (
                            <CreatableSelect
                              {...field}
                              options={[
                                { value: "Roubo", label: "Roubo" },
                                { value: "Furto", label: "Furto" },
                                {
                                  value: "Acidentes de trânsito",
                                  label: "Acidentes de trânsito",
                                },
                                {
                                  value: "Danos a terceiros",
                                  label: "Danos a terceiros",
                                },
                                {
                                  value: "Causas naturais",
                                  label: "Causas naturais",
                                },
                              ]}
                              placeholder="Selecione, ou crie uma evento"
                              isSearchable={true}
                              isClearable={true}
                              //menuPlacement="top"
                              required
                              defaultValue={
                                natureza_do_evento
                                  ? {
                                      value: natureza_do_evento,
                                      label: natureza_do_evento,
                                    }
                                  : null
                              }
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
                                  display: "none",
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

                    <div className="input__carga_embarcada">
                      <InputForms
                        label="CARGA EMBARCADA:"
                        name="carga_embarcada"
                        placeholder="Informe a carga embarcada"
                        disabled={status === "Revisando" ? true : false}
                        defaultValue={carga_embarcada}
                        register={register}
                        required
                        error={
                          errors.carga_embarcada
                            ? errors.carga_embarcada.message
                            : " "
                        }
                      />
                    </div>

                    <div className="input__valor_da_carga">
                      <InputForms
                        label="VALOR DA CARGA:"
                        name="valor_da_carga"
                        placeholder="Informe o valor da carga"
                        disabled={status === "Revisando" ? true : false}
                        value={valorCargaMask}
                        defaultValue={valor_da_carga}
                        onChange={handleValorCarga}
                        register={register}
                        required
                        error={
                          errors.valor_da_carga
                            ? errors.valor_da_carga.message
                            : " "
                        }
                      />
                    </div>
                  </ContentInputsCadastro>
                </TabsContent>

                <TabsContent value="TabNotas">
                  <ContentTextEditor>
                    <TextAreaEditor
                      name="notas"
                      defaultValue={notas}
                      placeholder="Digite aqui uma observação..."
                      disabled={status === "Revisando" ? true : false}
                      register={register}
                      required={false}
                      cols="1010"
                      rows="15"
                      error={
                        errors.valor_da_carga ||
                        errors.carga_embarcada ||
                        //errors.natureza_do_evento ||
                        errors.seguradora
                          ? "Favor verificar campos obrigatórios na guia CADASTRO"
                          : " "
                      }
                    />
                  </ContentTextEditor>
                </TabsContent>

                {status === "Revisando" ? (
                  <div className="InfoStausRevisando">
                    <h1>Aguarde! Relatório em processo de revisão</h1>
                  </div>
                ) : status === "Concluído" ? (
                  <ContentButton>
                    <ButtonReport
                      type="submit"
                      TextTitle="Atualizar"
                      IconLeft={<NotePencil size={32} />}
                      IconRight={<CaretRight size={32} />}
                    />
                  </ContentButton>
                ) : (
                  <ContentButton>
                    <ButtonReport
                      type="submit"
                      TextTitle="Cadastrar"
                      IconLeft={<FloppyDisk size={32} />}
                      IconRight={<CaretRight size={32} />}
                    />
                  </ContentButton>
                )}
              </FormReport>
            </TabsRoot>
          </BoxForm>
        </Content>
      </Container>
    </>
  );
}
