import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bell, FloppyDisk } from "phosphor-react";

import { Layout } from "@components/Layout";
import { HeaderReport } from "@components/Reports/HeaderReport";
import { Heading } from "@components/Reports/Heading";
import { InputText } from "@components/Reports/TextInput";
import { ButtonReport } from "@components/Reports/Button";
import { TextAreaEditor } from "@components/Reports/TextArea";

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
  ContentInputsCadastro
} from "./styles";

const schema = z.object({
  seguradora: z
    .string()
    .min(3, { message: "Precisa ter pelo menos 3 letras. Seguradora" })
    .transform((name) => name.toLowerCase()),
  natureza_do_evento: z
    .string()
    .min(3, { message: "Precisa ter pelo menos 3 letras." })
    .transform((name) => name.toLowerCase()),
  carga_embarcada: z
    .string()
    .min(3, { message: "Precisa ter pelo menos 3 letras." })
    .transform((name) => name.toLowerCase()),
  valor_da_carga: z
    .string()
    .min(3, { message: "Precisa ter pelo menos 3 letras. Valor da Carga" })
    .transform((name) => name.toLowerCase()),
  notas: z
    .string()
});

type IFormValues = z.infer<typeof schema>;

export default function CaracteristicaSinistro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <Layout>
      <Container>
        <HeaderReport
          processNumber="123456"
          reportStatus="Formalizando"
          reportDate="01/01/2021"
          responsible="Diogo Silva"
          manager="Maria Azevedo"
        />
        <Content>
          <Heading
            Title="Característica do Sinistro"
            Subtitle="Preencha os campos abaixo"
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
                    register={register}
                    required
                    error={errors.seguradora ? errors.seguradora.message : " "}
                  />
                  <InputText
                    label="Natureza do Evento"
                    name="natureza_do_evento"
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

                <TabsContent  value="TabNotas">
                   <ContentTextEditor>
                   <TextAreaEditor
                    name="notas"
                    placeholder="Digite aqui uma observação..."
                    register={register}
                    required={false}
                    cols="1010"
                    rows="15"
                    error={
                      errors.valor_da_carga 
                      || errors.carga_embarcada 
                      || errors.natureza_do_evento 
                      || errors.seguradora 
                      ? "Favor verificar campos obrigatórios na guia CADASTRO" 
                      : " "
                    }
                  />
                   </ContentTextEditor>
                </TabsContent>

                <ContentButton>
                  <ButtonReport
                    type="submit"
                    TextTitle="Salvar"
                    Icon={<FloppyDisk size={32} />}
                  />
                </ContentButton>

              </FormReport>
            </TabsRoot>
          </BoxForm>

        </Content>
      </Container>
    </Layout>
  );
}
