import { useEffect, useState } from "react";
import {
  useForm,
  SubmitHandler,
  Controller,
  UseFormRegister,
} from "react-hook-form";

import Select from "react-select";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CaretRight, FloppyDisk, NotePencil } from "phosphor-react";

import Lottie from "lottie-react";
import animationLoding1to2 from "../../../../../public/lottieFiles/LoadingStep1to2.json";

import { Heading } from "@components/Reports/Heading";
import { ButtonReport } from "@components/Reports/Button";
import { TextAreaEditor } from "@components/Reports/TextArea";
import { InputForms } from "@components/Reports/InputForms";
import { SelectInputForms } from "@components/Reports/SelectInputForms";
import { NewSelect2 } from "@components/Reports/NewSelect2";

import { usePostStep4ReportId } from "@hooks/useApi/step4/usePostStep4ReportId";
import { usePostStep3ReportId } from "@hooks/useApi/step3/usePostStep3ReportId";

import { I4_Carregamento } from "src/@types/typesReport";
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

interface IFormInput {
  reportId: string;
  n_processo: string;
  status: string;
  notas: string;
  cep_sinistro: string;
  logradouro_sinistro: string;
  bairro_sinistro: string;
  localidade_sinistro: string;
  uf_sinistro: string;
  data_hora_sinistro: string;
  data_hora_acionamento_agente: string;
  data_hora_chegada_agente: string;
  data_hora_comunicacao_cia: string;
  comunicante: string;
  agente_acionado: string;
}

export default function Step3_Cronologia_Sinistro({
  reportId,
  n_processo,
  status,
  notas,
  cep_sinistro,
  logradouro_sinistro,
  bairro_sinistro,
  localidade_sinistro,
  uf_sinistro,
  data_hora_sinistro,
  data_hora_acionamento_agente,
  data_hora_chegada_agente,
  data_hora_comunicacao_cia,
  comunicante,
  agente_acionado,
}: IFormInput) {
  const schemaCadastro = z.object({
    status: z.string().default("Concluído"),
    notas: z.string().optional(),
    cep_sinistro: z.string().min(8, { message: "❗cep" }),
    logradouro_sinistro: z.string().min(3, { message: "❗endereço" }),
    bairro_sinistro: z.string().min(3, { message: "❗bairro" }),
    localidade_sinistro: z.string().min(3, { message: "❗cidade" }),
    uf_sinistro: z.string().min(2, { message: "❗uf" }),
    data_hora_sinistro: z.string().min(3, { message: "❗" }),
    data_hora_acionamento_agente: z.string().min(3, { message: "❗" }),
    data_hora_chegada_agente: z.string().min(3, { message: "❗" }),
    data_hora_comunicacao_cia: z.string().min(3, { message: "❗" }),
    comunicante: z.string().min(3, { message: "❗comunicante" }),
    agente_acionado: z.string().min(3, { message: "❗agente" }),
  });

  type IFormValues = z.infer<typeof schemaCadastro>;

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(schemaCadastro),
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

  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    try {
      await usePostStep3ReportId(reportId, data as I3_Cronologia_Sinistro);
      await usePostStep4ReportId(reportId, {
        status: "Formalizando",
      } as I4_Carregamento);
    } catch (error) {
      console.log("Erro ao cadastrar cliente segurado");
    }
    console.log(data);
  };

  function handleBlurCep(e: any) {
    const { value } = e.target;

    const cep = value.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("logradouro_sinistro", data?.logradouro);
        setValue("bairro_sinistro", data?.bairro);
        setValue("localidade_sinistro", data?.localidade);
        setValue("uf_sinistro", data?.uf);
        setFocus("comunicante")
        reset({
          ...data,
          cep: value,
        });
      });
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
            Title="3- Cronologia do Sinistro"
            Subtitle="Preencha os campos essenciais para o cadastro da cronologia do sinistro: Localização do sinistro, data e hora da comunicação, 
            data e hora do sinistro, agente acionado e data e hora da chegada ao local."
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

                    <div className="input__cep">
                      <InputForms
                        onBlur={handleBlurCep}
                        label="⚡️ CEP:"
                        name="cep_sinistro"
                        placeholder="Informe o CEP"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={cep_sinistro}
                        register={register}
                        required={true}
                        error={errors.cep_sinistro ? errors.cep_sinistro.message : " "}
                      />
                    </div>
                    <div className="input__endereco">
                      <InputForms
                        label="ENDEREÇO:"
                        name="logradouro_sinistro"
                        placeholder="Informe o endereço"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={logradouro_sinistro}
                        register={register}
                        required={true}
                        error={
                          errors.logradouro_sinistro ? errors.logradouro_sinistro.message : " "
                        }
                      />
                    </div>
                    <div className="input__bairro">
                      <InputForms
                        label="BAIRRO:"
                        name="bairro_sinistro"
                        placeholder="Informe o bairro"
                        spellcheck={false}
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={bairro_sinistro}
                        register={register}
                        required={true}
                        error={errors.bairro_sinistro ? errors.bairro_sinistro.message : " "}
                      />
                    </div>
                    <div className="input__cidade">
                      <InputForms
                        label="CIDADE:"
                        placeholder="Informe a cidade"
                        name="localidade_sinistro"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={localidade_sinistro}
                        register={register}
                        required={true}
                        error={
                          errors.localidade_sinistro ? errors.localidade_sinistro.message : " "
                        }
                      />
                    </div>
                    <div className="input__uf">
                      <InputForms
                        label="ESTADO:"
                        name="uf_sinistro"
                        placeholder="Informe o estado"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={uf_sinistro}
                        register={register}
                        required={true}
                        error={errors.uf_sinistro ? errors.uf_sinistro.message : " "}
                      />
                    </div>

                    <div className="input__comunicante">
                      <InputForms
                        label="COMUNICANTE:"
                        name="comunicante"
                        placeholder="Informe o comunicante"
                        defaultValue={comunicante}
                        register={register}
                        required={true}
                        error={errors.comunicante ? errors.comunicante.message : " "}
                      />
                    </div>
                    <div className="input__data_hora_comunicacao_cia">
                      <InputForms
                        label="DATA E HORA DA COMUNICAÇÃO:"
                        name="data_hora_comunicacao_cia"
                        defaultValue={data_hora_comunicacao_cia}
                        register={register}
                        required={true}
                        error={
                          errors.data_hora_comunicacao_cia
                            ? errors.data_hora_comunicacao_cia.message
                            : " "
                        }
                        type="datetime-local"
                      />

                    </div>
                    <div className="input__data_hora_sinistro"> 
                      <InputForms
                        label="DATA E HORA DO SINISTRO:"
                        name="data_hora_sinistro"
                        defaultValue={data_hora_sinistro}
                        register={register}
                        required={true}
                        error={
                          errors.data_hora_sinistro ? errors.data_hora_sinistro.message : " "
                        }
                        type="datetime-local"
                      />
                    </div>


                    <div className="input__agente_acionado"> 
                      <InputForms
                        label="AGENTE ACIONADO:"
                        name="agente_acionado"
                        placeholder="Informe o agente acionado"
                        defaultValue={agente_acionado}
                        register={register}
                        required={true}
                        error={errors.agente_acionado ? errors.agente_acionado.message : " "} 
                      />
                    </div>
                    <div className="input__data_hora_acionamento_agente"> 
                      <InputForms
                        label="DATA E HORA DO ACIONAMENTO:"
                        name="data_hora_acionamento_agente"
                        defaultValue={data_hora_acionamento_agente}
                        register={register}
                        required={true}
                        error={
                          errors.data_hora_acionamento_agente
                            ? errors.data_hora_acionamento_agente.message
                            : " "
                        }
                        type="datetime-local"
                      />
                    </div>
                    <div className="input__data_hora_chegada_agente"> 
                      <InputForms
                        label="DATA E HORA DA CHEGADA:"
                        name="data_hora_chegada_agente"
                        defaultValue={data_hora_chegada_agente}
                        register={register}
                        required={true}
                        error={
                          errors.data_hora_chegada_agente
                            ? errors.data_hora_chegada_agente.message
                            : " "
                        }
                        type="datetime-local"
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
                        errors.cep_sinistro ||
                        errors.logradouro_sinistro ||
                        errors.bairro_sinistro ||
                        errors.localidade_sinistro ||
                        errors.uf_sinistro ||
                        errors.comunicante ||
                        errors.data_hora_comunicacao_cia ||
                        errors.data_hora_sinistro ||
                        errors.agente_acionado ||
                        errors.data_hora_acionamento_agente ||
                        errors.data_hora_chegada_agente
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
