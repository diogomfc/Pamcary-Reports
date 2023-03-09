import { useRouter } from "next/router";
import { useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CaretRight, FloppyDisk, HourglassSimpleMedium } from "phosphor-react";

import { Heading } from "@components/Reports/Heading";
import { InputText } from "@components/Reports/TextInput";
import { ButtonReport } from "@components/Reports/Button";
import { TextAreaEditor } from "@components/Reports/TextArea";

import { I2_Caracteristica_SinistroV2 } from "src/@types/typesReport";

//GET, POST, PUT
import { useOnSnapshotReportsId } from "@hooks/useFirebase/useOnSnapshotReportsId";
import { usePostStep2ReportId } from "@hooks/useApi/step2/usePostStep2ReportId";
import { useUpdateStep2ReportId } from "@hooks/useApi/step2/useUpdateStep2ReportId";

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
} from "./styles";

interface IFormInput {
  reportId: string;
  n_processo: string;
  seguradora: string;
  natureza_do_evento: string;
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
  const schema = z.object({
    seguradora: z.string().min(3, { message: "Informe o nome da seguradora" }),
    natureza_do_evento: z
      .string()
      .min(3, { message: "Informe qual natureza do evento" }),
    carga_embarcada: z
      .string()
      .min(3, { message: "Informe qual a carga embrancada" }),
    valor_da_carga: z.string().min(3, { message: "informe o valor da Carga" }),
    status: z.string().default("Concluído"),
    notas: z.string().optional(),
  });

  type IFormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });

  //Função para enviar os dados do formulário para o banco de dados update ou create
  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
      await usePostStep2ReportId(reportId, data as I2_Caracteristica_SinistroV2);
      console.log("Dados Salvos", data);
  };

  // useEffect(() => {
  //   if (reportId?.includes("_Update") && formState.isSubmitSuccessful) {
  //     console.log("Formulário atualizado e enviado com sucesso");
  //     //router.push(`/reports/register/steps/step3_Dados_do_Sinistro/${id}`);
  //   } else if (formState.isSubmitSuccessful) {
  //     reset();
  //     console.log("Formulário enviado com sucesso");
  //     router.push('/reports/list');
  //     //router.push(`/reports/register/steps/step3_Dados_do_Sinistro/${id}`);
  //   }
  // }, [formState.isSubmitSuccessful]);

  return (
    <Container key={n_processo}>
      <Content>
        <Heading
          Title={
            reportId?.includes("_Update")
              ? "Atualizar Característica do Sinistro"
              : "Cadastro Característica do Sinistro"
          }
          Subtitle={
            reportId?.includes("_Update")
              ? "Atualizar os campos abaixo para para prosseguir com o registro da proxima etapa"
              : "Preencha os campos abaixo para para prosseguir com o registro da proxima etapa"
          }
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
                    label="Seguradora"
                    name="seguradora"
                    disabled={status === "Revisando" ? true : false}
                    defaultValue={seguradora}
                    register={register}
                    required
                    error={errors.seguradora ? errors.seguradora.message : " "}
                  />
                  <InputText
                    label="Natureza do Evento"
                    name="natureza_do_evento"
                    disabled={status === "Revisando" ? true : false}
                    defaultValue={natureza_do_evento}
                    register={register}
                    required
                    error={
                      errors.natureza_do_evento
                        ? errors.natureza_do_evento.message
                        : " "
                    }
                  />
                  <InputText
                    label="Carga Embarcada"
                    name="carga_embarcada"
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
                  <InputText
                    label="Valor da Carga"
                    name="valor_da_carga"
                    disabled={status === "Revisando" ? true : false}
                    defaultValue={valor_da_carga}
                    register={register}
                    required
                    error={
                      errors.valor_da_carga
                        ? errors.valor_da_carga.message
                        : " "
                    }
                  />
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
                      errors.natureza_do_evento ||
                      errors.seguradora
                        ? "Favor verificar campos obrigatórios na guia CADASTRO"
                        : " "
                    }
                  />
                </ContentTextEditor>
              </TabsContent>

              <ContentButton>
                {reportId?.includes("_Update") ? (
                  <ButtonReport
                    type="submit"
                    disabled={status === "Revisando" ? true : false}
                    TextTitle="Atualizar e Salvar"
                    IconLeft={<FloppyDisk size={32} />}
                    IconRight={<CaretRight size={32} />}
                  />
                ) : (
                  <ButtonReport
                    type="submit"
                    disabled={status === "Revisando" ? true : false}
                    TextTitle="Cadastrar"
                    IconLeft={<FloppyDisk size={32} />}
                    IconRight={<CaretRight size={32} />}
                  />
                )}
              </ContentButton>
            </FormReport>
          </TabsRoot>
        </BoxForm>
      </Content>
    </Container>
  );
}
