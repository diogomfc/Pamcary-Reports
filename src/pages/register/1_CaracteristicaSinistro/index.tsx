import { useForm, SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Bell, FloppyDisk } from 'phosphor-react';


import { Layout } from "@components/Layout";
import { GuiaForm } from "@components/Reports/GuiaForm/idenx";
import { HeaderReport } from "@components/Reports/HeaderReport";
import { Heading } from "@components/Reports/Heading";
import { InputText } from "@components/Reports/TextInput";
import {ButtonReport} from '@components/Reports/Button';


import { Container, FormReport, Content, ContentButton } from "./styles";

const schema = z.object({
  seguradora: z
  .string()
  .min(3, { message: 'Precisa ter pelo menos 3 letras.' })
  .transform((name) => name.toLowerCase()),
  natureza_do_evento: z
  .string()
  .min(3, { message: 'Precisa ter pelo menos 3 letras.' })
  .transform((name) => name.toLowerCase()),
  carga_embarcada: z
  .string()
  .min(3, { message: 'Precisa ter pelo menos 3 letras.' })
  .transform((name) => name.toLowerCase()),
  valor_da_carga: z
  .string()
  .min(3, { message: 'Precisa ter pelo menos 3 letras.' })
  .transform((name) => name.toLowerCase()),
})

type IFormValues = z.infer<typeof schema>


export default function CaracteristicaSinistro() {
  
  const { register, handleSubmit,formState: { errors } } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });
  
  const onSubmit: SubmitHandler<IFormValues> = (data:IFormValues) => {
    alert(JSON.stringify(data))
    console.log(data)
  }


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
          <GuiaForm Title="CADASTRO" />
          <FormReport as="form" onSubmit={handleSubmit(onSubmit)}>
            <InputText 
             label="Seguradora"
             name="seguradora" 
             register={register} 
             required
             error={errors.seguradora ? errors.seguradora.message : ' ' }
            />
              <InputText 
             label="Natureza do Evento"
             name="natureza_do_evento" 
             register={register} 
             required
             error={errors.natureza_do_evento ? errors.natureza_do_evento.message : ' ' }
            />
              <InputText 
             label="Carga Embarcada"
             name="carga_embarcada" 
             register={register} 
             required
             error={errors.carga_embarcada ? errors.carga_embarcada.message : ' ' }
            />
              <InputText 
             label="Valor da Carga"
             name="valor_da_carga" 
             register={register} 
             required
             error={errors.valor_da_carga ? errors.valor_da_carga.message : ' ' }
            />
             <InputText 
             label="Valor da Carga"
             name="valor_da_carga" 
             register={register} 
             required
             error={errors.valor_da_carga ? errors.valor_da_carga.message : ' ' }
            />
             <InputText 
             label="Valor da Carga"
             name="valor_da_carga" 
             register={register} 
             required
             error={errors.valor_da_carga ? errors.valor_da_carga.message : ' ' }
            />
            <ContentButton> 
              <ButtonReport type="submit" TextTitle="Salvar" Icon={<FloppyDisk size={32} />} />
           </ContentButton>
          </FormReport>
           
        </Content>
      </Container>
    </Layout>
  );
}
