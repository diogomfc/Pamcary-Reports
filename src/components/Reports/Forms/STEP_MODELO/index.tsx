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

import { usePostStep2ReportId } from "@hooks/useApi/step2/usePostStep2ReportId";
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
}

export default function STEP_MODELO({
  reportId,
  n_processo,
  status,
  notas,
}: IFormInput) {
  const schemaCadastro = z.object({
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
      await usePostStep3ReportId(reportId, data as I3_Cronologia_Sinistro);
      // await usePostStep4ReportId(reportId, {
      //   status: "Formalizando",
      // } as I4_Carregamento);
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
      )}
      <Container key={n_processo}>
        <Content>
          <Heading
            Title="3- Cronologia do Sinistro"
            Subtitle="Preencha os campos abaixo para para prosseguir com o registro da próxima etapa"
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
                    <h1>CONTENT INPUTS</h1>
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
                      // error={
                      //   errors.valor_da_carga ||
                      //   errors.carga_embarcada ||
                      //   // errors.natureza_do_evento ||
                      //   errors.seguradora
                      //     ? "Favor verificar campos obrigatórios na guia CADASTRO"
                      //     : " "
                      // }
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
