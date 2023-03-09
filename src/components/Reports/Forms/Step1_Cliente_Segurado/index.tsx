import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CaretRight, FloppyDisk } from "phosphor-react";

import Lottie from "lottie-react";
import animationLoding1to2 from "../../../../../public/lottieFiles/LoadingStep1to2.json";
import animationUnlockedNextStep from "../../../../../public/lottieFiles/UnlockedNextStep.json";

import { Heading } from "@components/Reports/Heading";
import { InputText } from "@components/Reports/TextInput";
import { ButtonReport } from "@components/Reports/Button";
import { TextAreaEditor } from "@components/Reports/TextArea";

import { usePostStep1ReportId } from "@hooks/useApi/step1/usePostStep1ReportId";
import { usePostStep2ReportId } from "@hooks/useApi/step2/usePostStep2ReportId";
import { useUpdateStep1ReportsId } from "@hooks/useApi/step1/useUpdateStep1ReportsId";

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
  ContentInputsCadastro,
  BackdropSubmitting,
  BackdropSubmitSuccessful,
} from "./styles";

interface IFormInput {
  reportId: string;
  n_processo: string;
  cliente: string;
  cnpj: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
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
  endereco,
  bairro,
  cidade,
  estado,
  cep,
  telefone,
  email,
  contato,
  status,
  notas,
  onClickButton,
}: IFormInput) {
  const schemaCadastro = z.object({
    cliente: z
      .string()
      .min(3, { message: "Informe o nome do cliente" })
      .default(cliente),
    cnpj: z.string().min(18, { message: "Informe o CNPJ" }),
    endereco: z.string().min(3, { message: "Informe o endereço" }),
    bairro: z.string().min(3, { message: "Informe o bairro" }),
    cidade: z.string().min(3, { message: "Informe a cidade" }),
    estado: z.string().min(2, { message: "Informe o estado" }),
    cep: z.string().min(9, { message: "Informe o CEP" }),
    telefone: z.string().min(8, { message: "Informe o telefone" }),
    email: z.string().min(3, { message: "Informe o email" }),
    contato: z.string().min(3, { message: "Informe o contato" }),
    status: z.string().default("Concluído"),
    notas: z.string().optional(),
  });

  type IFormValues = z.infer<typeof schemaCadastro>;

  const {
    register,
    handleSubmit,
    reset,
    formState,
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
      ) 
     }
      <Container key={n_processo}>
        <Content>
          <Heading
            Title="Cadastro cliente segurado"
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
                  <ContentInputsCadastro>
                    <InputText
                      label="Cliente / Segurado"
                      name="cliente"
                      defaultValue={cliente}
                      disabled={true}
                      register={register}
                      required={true}
                      error={errors.cliente ? errors.cliente.message : " "}
                    />
                    <InputText
                      label="CNPJ"
                      name="cnpj"
                      disabled={
                        status === "Revisando" ||
                        status === "Aprovado" ||
                        status === "Emitido" ||
                        status === "Cancelado"
                          ? true
                          : false
                      }
                      defaultValue={cnpj}
                      register={register}
                      required={true}
                      error={errors.cnpj ? errors.cnpj.message : " "}
                    />
                    <InputText
                      label="Endereço"
                      name="endereco"
                      disabled={
                        status === "Revisando" ||
                        status === "Aprovado" ||
                        status === "Emitido" ||
                        status === "Cancelado"
                          ? true
                          : false
                      }
                      defaultValue={endereco}
                      register={register}
                      required={true}
                      error={errors.endereco ? errors.endereco.message : " "}
                    />
                    <InputText
                      label="Bairro"
                      name="bairro"
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
                    <InputText
                      label="Cidade"
                      name="cidade"
                      disabled={
                        status === "Revisando" ||
                        status === "Aprovado" ||
                        status === "Emitido" ||
                        status === "Cancelado"
                          ? true
                          : false
                      }
                      defaultValue={cidade}
                      register={register}
                      required={true}
                      error={errors.cidade ? errors.cidade.message : " "}
                    />
                    <InputText
                      label="Estado"
                      name="estado"
                      disabled={
                        status === "Revisando" ||
                        status === "Aprovado" ||
                        status === "Emitido" ||
                        status === "Cancelado"
                          ? true
                          : false
                      }
                      defaultValue={estado}
                      register={register}
                      required={true}
                      error={errors.estado ? errors.estado.message : " "}
                    />
                    <InputText
                      label="CEP"
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
                    <InputText
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
                    <InputText
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
                    <InputText
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
                  </ContentInputsCadastro>
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
                        errors.endereco ||
                        errors.bairro ||
                        errors.cidade ||
                        errors.estado ||
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
