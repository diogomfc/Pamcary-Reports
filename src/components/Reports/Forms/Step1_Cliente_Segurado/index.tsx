import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CaretRight, FloppyDisk } from "phosphor-react";

import Lottie from "lottie-react";
import animationLoding1to2 from "../../../../../public/lottieFiles/LoadingStep1to2.json";

import { Heading } from "@components/Reports/Heading";
import { ButtonReport } from "@components/Reports/Button";
import { TextAreaEditor } from "@components/Reports/TextArea";

import { usePostStep1ReportId } from "@hooks/useApi/step1/usePostStep1ReportId";
import { usePostStep2ReportId } from "@hooks/useApi/step2/usePostStep2ReportId";

import { I1_Cliente_Segurado } from "src/@types/typesReport";
import { I2_Caracteristica_Sinistro } from "src/@types/typesReport";

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
  ContentTextEditor,
  BackdropSubmitting,
  ContentInputs,
} from "./styles";
import { InputForms } from "@components/Reports/InputForms";

interface IFormInput {
  reportId: string;
  n_processo: string;
  cliente: string;
  cnpj: string;
  logradouro: string; //endereço
  bairro: string;
  localidade: string; //cidade
  uf: string; //estado
  cep: string;
  telefone: string;
  celular: string;
  email: string;
  contato: string;
  status: string;
  notas: string;
  onClickButton?: () => void;
}

export default function Step1_Cliente_Segurado({
  reportId,
  n_processo,
  cliente,
  cnpj,
  logradouro,
  bairro,
  localidade,
  uf,
  cep,
  telefone,
  celular,
  email,
  contato,
  status,
  notas,
}: IFormInput) {
  const schemaCadastro = z.object({
    cliente: z
      .string()
      .min(3, { message: "Informe o nome do cliente" })
      .default(cliente),
    cnpj: z.string().min(18, { message: "❗cnpj" }).default(cnpj),
    logradouro: z.string().min(3, { message: "❗endereço" }),
    bairro: z.string().min(3, { message: "❗bairro" }),
    localidade: z.string().min(3, { message: "❗cidade" }),
    uf: z.string().min(2, { message: "❗uf" }),
    cep: z.string().min(8, { message: "❗cep" }),
    telefone: z.string().min(8, { message: "❗telefone" }),
    celular: z.string().min(8, { message: "❗telefone" }),
    email: z.string().min(3, { message: "❗email" }),
    contato: z.string().min(3, { message: "❗contato" }),
    status: z.string().default("Concluído"),
    notas: z.string().optional(),
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
      await usePostStep1ReportId(reportId, data as I1_Cliente_Segurado);
      await usePostStep2ReportId(reportId, {
        status: "Formalizando",
      } as I2_Caracteristica_Sinistro);
    } catch (error) {
      console.log("Erro ao cadastrar cliente segurado");
    }
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
        setValue("logradouro", data?.logradouro);
        setValue("bairro", data?.bairro);
        setValue("localidade", data?.localidade);
        setValue("uf", data?.uf);
        setFocus("contato")
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
            Title="1 - Cliente segurado"
            Subtitle="Preencha os campos abaixo para para prosseguir com o registro da proxima etapa"
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
                  <ContentInputs>
                    <div className="input _name">
                      <InputForms
                        label="Cliente / Segurado"
                        name="cliente"
                        defaultValue={cliente}
                        disabled={true}
                        register={register}
                        required={true}
                        error={errors.cliente ? errors.cliente.message : " "}
                      />
                    </div>
                    <div className="input _cnpj">
                      <InputForms
                        label="CNPJ"
                        name="cnpj"
                        defaultValue={cnpj}
                        disabled={true}
                        register={register}
                        required={true}
                        error={errors.cnpj ? errors.cnpj.message : " "}
                      />
                    </div>
                    <div className="input _cep">
                      <InputForms
                        onBlur={handleBlurCep}
                        label="⚡️ CEP"
                        name="cep"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={cep}
                        register={register}
                        required={true}
                        error={errors.cep ? errors.cep.message : " "}
                      />
                    </div>
                    <div className="input _endereco">
                      <InputForms
                        label="Endereço"
                        name="logradouro"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={logradouro}
                        register={register}
                        required={true}
                        error={
                          errors.logradouro ? errors.logradouro.message : " "
                        }
                      />
                    </div>
                    <div className="input _bairro">
                      <InputForms
                        label="Bairro"
                        name="bairro"
                        spellcheck={false}
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={bairro}
                        register={register}
                        required={true}
                        error={errors.bairro ? errors.bairro.message : " "}
                      />
                    </div>
                    <div className="input _cidade">
                      <InputForms
                        label="Cidade"
                        name="localidade"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={localidade}
                        register={register}
                        required={true}
                        error={
                          errors.localidade ? errors.localidade.message : " "
                        }
                      />
                    </div>
                    <div className="input _uf">
                      <InputForms
                        label="Estado"
                        name="uf"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={uf}
                        register={register}
                        required={true}
                        error={errors.uf ? errors.uf.message : " "}
                      />
                    </div>
                    <div className="input _contato">
                      <InputForms
                        label="Contato"
                        name="contato"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={contato}
                        register={register}
                        required={true}
                        error={errors.contato ? errors.contato.message : " "}
                      />
                    </div>
                    <div className="input _celular">
                      <InputForms
                        label="Celular"
                        name="celular"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={celular}
                        register={register}
                        required={true}
                        error={errors.celular ? errors.celular.message : " "}
                      />
                    </div>
                    <div className="input _telefone">
                      <InputForms
                        label="Telefone"
                        name="telefone"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={telefone}
                        register={register}
                        required={true}
                        error={errors.telefone ? errors.telefone.message : " "}
                      />
                    </div>
                    <div className="input _email">
                      <InputForms
                        label="Email"
                        name="email"
                        disabled={
                          status === "Revisando" ||
                          status === "Aprovado" ||
                          status === "Emitido" ||
                          status === "Cancelado"
                            ? true
                            : false
                        }
                        defaultValue={email}
                        type="email"
                        register={register}
                        required={true}
                        error={errors.email ? errors.email.message : " "}
                      />
                    </div>
                  </ContentInputs>
                </TabsContent>

                <TabsContent value="TabNotas">
                  <ContentTextEditor>
                    <TextAreaEditor
                      defaultValue={notas}
                      name="notas"
                      disabled={
                        status === "Revisando" ||
                        status === "Aprovado" ||
                        status === "Emitido" ||
                        status === "Cancelado"
                          ? true
                          : false
                      }
                      placeholder="Digite aqui uma observação..."
                      register={register}
                      required={false}
                      cols="1010"
                      rows="15"
                      error={
                        errors.cliente ||
                        errors.cnpj ||
                        errors.logradouro ||
                        errors.bairro ||
                        errors.localidade ||
                        errors.uf ||
                        errors.cep ||
                        errors.telefone ||
                        errors.email ||
                        errors.contato
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
                ) : status !== undefined ? (
                  <ContentButton>
                    <ButtonReport
                      type="submit"
                      TextTitle="Atualizar"
                      IconLeft={<FloppyDisk size={32} />}
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

// : isSubmitSuccessful ? (
//   <BackdropSubmitSuccessful>
//     <div>
//       <Lottie
//         style={{ width: "100px", height: "100px" }}
//         animationData={animationUnlockedNextStep}
//         loop={true}
//         autoplay={true}
//       />
//       <h1>Nova etapa desbloqueada para preenchimento</h1>
//       <ButtonReport
//         onClick={onClickButton}
//         TextTitle="Característica do Sinistro"
//         IconLeft={"Etapa 2"}
//         IconRight={<CaretRight size={32} />}
//       />
//       <Link href={`/reports/list`} passHref>
//         <span>Voltar para listagem de reports</span>
//       </Link>
//     </div>
//   </BackdropSubmitSuccessful>
// )
