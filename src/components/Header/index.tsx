import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Bell } from 'phosphor-react'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db, logout } from 'src/services/firebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore"


import { MenuHeaderRelatorios, MenuHeaderAjuda, MenuPerfil } from '../Menu'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Container,
  Content,
  Left,
  Perfil,
} from './styles'

interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  perfil: string;
  status: boolean;
}

export function Header() {
  const router = useRouter();
 
  function LogoutLogin() {
    logout();
    router.push("/login");
  }

  const [user] = useAuthState(auth);
  const [users, setUsers] = useState<IUser[]>([]);
  const [substring, setSubstring] = useState("");


  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));

      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      const id = doc.docs[0].id;

      setUsers([
        ...users,
        {
          id,
          name: data.name,
          email: data.email,
          avatar: data.avatar,
          perfil: data.perfil,
          status: data.status,
        },
      ]);

      setSubstring(data.email.substring(0, 1).toUpperCase());
    } catch (error) {
      console.error(error);
      //alert("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  return (
    <Container>
      <Content>
        <Left>
          <div className="separator"></div>
          <Image
            src="/img/Logo.svg"
            alt="Logo"
            width={306}
            height={35}
          />
          <div className="separator"></div>
          <MenuHeaderRelatorios />
          <MenuHeaderAjuda />
        </Left>
        <Perfil>
        {
            users.map((user) => (
              <div key={user.id} className="content_perfil">
                <Avatar>
                  <AvatarImage
                    src={user.avatar}
                    alt="Avatar"
                  />
                  <AvatarFallback delayMs={600}>{substring}</AvatarFallback>
                </Avatar>

                <div className="name_perfil">
                  <h1>{user.email}</h1>
                  <p>{user.perfil}</p>
                </div>
              </div>
            ))
        }
          <MenuPerfil />

          <Link href="#">
            <div className="notification">
              <Bell size={32} />
              <div>
                <span>8</span>
              </div>
            </div>
          </Link>
          <button className="btm_Sair" onClick={LogoutLogin}>
            <span>Sair</span>
          </button>
        </Perfil>
      </Content>
    </Container>
  )
}
