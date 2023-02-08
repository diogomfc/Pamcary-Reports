import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChalkboardTeacher, EnvelopeSimple, Key} from "phosphor-react";

import { InputText } from "@components/Reports/TextInput";
import { ButtonReport } from "@components/Reports/Button";

import { 
  Container, 
  Content, 
  FormLogin, 
  Logo, 
  Title, 
  ContentInputsLogin, 
  FooterForm } from "./styles";


const schema = z.object({
  email: z
    .string()
    .min(3, { message: "Precisa ter pelo menos 3 letras. Email" })
    .transform((name) => name.toLowerCase()),
  password: z
    .string()
    .min(3, { message: "Precisa ter pelo menos 3 letras. Senha" })
    .transform((name) => name.toLowerCase()),
});

type IFormValues = z.infer<typeof schema>;


export default function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });


  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    alert(JSON.stringify(data));
  };
 
  return (
    <Container backgroundLogin={'/img/backgroundLogin.png'} >
      <Content> 
        <Logo>
          <Image src="/img/Logo.svg" alt="Logo" width={305} height={56} />
        </Logo>
        <Title>
          <div className="linha"></div>
           <h1>RELATÓRIO DE AVERIGUAÇÃO</h1>
          <div className="linha"></div>
        </Title>

        <FormLogin 
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        >
          <ContentInputsLogin>
              <InputText
                prefix={<EnvelopeSimple size={32} />}
                name="email"
                type="email"
                register={register}
                required
                error={errors.email?.message}
              />
              <InputText
                prefix={<Key size={32} />}
                name="password"
                type="password"
                register={register}
                required
                error={errors.password?.message}
              />
          </ContentInputsLogin>
              
              <ButtonReport
                type="submit"
                TextTitle="Entrar no sistema"
                Icon={<ChalkboardTeacher size={32} />}
              />

              <FooterForm>
                <a href="#">Esqueceu a senha?</a>
              </FooterForm>
         
        </FormLogin>
      </Content>
    </Container>
  );
}