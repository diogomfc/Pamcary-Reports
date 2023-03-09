import toast from "react-hot-toast";
import { firebaseApp } from "@services/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";

import { BASE_URL_DEV } from "@services/utils/baseURl";

export const auth = getAuth(firebaseApp);
 

//Tipo para o usuário
type User = {
  email: string;
  password: string;
};

//Função para fazer login com email e senha
export const logInWithEmailAndPassword = async (email:string, password:string) => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error("Usuário não encontrado! Verifique se o email e senha estão corretos.");
    return null;
  }
}

//Função para fazer logout
export const useLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error("Erro ao fazer logout!");
  }
}


//Tipo para cadastro de usuário na collection users
type UserCollection = {
  uid: string;
  name: string;
  perfil: "Analista",
  status: "Ativo",
  email: string;
  avatar: string;
  created_in: string;
};

//Função para cadastrar usuário na collection users com tipo UserCollection
export const registerWithEmailAndPassword = async ({name,perfil,status,email,avatar,uid, created_in}: UserCollection) => {
  try{
    const user = await fetch(`${BASE_URL_DEV}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        perfil,
        status,
        email,
        avatar,
        uid,
        created_in: new Date().toLocaleString(),
      }),
    });
    return user;
  }catch(error){
    toast.error("Erro ao cadastrar usuário!");
    return null;
  }
}

  
