import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db, logInWithEmailAndPassword, logout } from "../../services/firebaseConfig";

import { ChalkboardTeacher, EnvelopeSimple, Key} from "phosphor-react";

import toast, { Toaster } from 'react-hot-toast';

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
    .min(3, { message: "Favor informar um email válido" })
    .transform((name) => name.toLowerCase()),
  password: z
    .string()
    .min(3, { message: "A senha deve ter no mínimo 6 caracteres" })
});

type IFormValues = z.infer<typeof schema>;


export default function Login() {

 const router = useRouter();
 const [user] = useAuthState(auth);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(schema),
  });

  const currentUser = async () => {
    if (user) {
      router.push("./register/1_CaracteristicaSinistro");
    }
  }

 useEffect(() => {
    currentUser();
  }, [user]);
  

  const handleSignIn: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    if (!data.email || !data.password) {
      return;
    }
    try {
      await logInWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      console.log(error);
    }
  
  };


  return (
    <Container backgroundLogin={'/img/backgroundLogin.png'} >

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: {
              fontSize: '14px',
              background: '#FFEBEB',
              color: '#E53E3E',
            },
          }}
        />

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
        onSubmit={handleSubmit(handleSignIn)}
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