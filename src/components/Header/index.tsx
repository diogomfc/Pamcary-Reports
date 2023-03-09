import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import { Bell } from "phosphor-react";

import { useLogout } from "@services/auth/firebaseAuth";
import { ModalNewReport } from "@components/Reports/ModalNewReport";
//import { useProfileUser } from "@hooks/useApi/user/useProfileUser";
import { useOnSnapshotUserId } from "@hooks/useFirebase/useOnSnapshotUserId";

import { MenuHeaderRelatorios, MenuHeaderAjuda, MenuPerfil } from "../Menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Container,
  Content,
  Left,
  Perfil,
} from "./styles";


export function Header() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  //const { userProfile } = useProfileUser();
  const { userProfile } = useOnSnapshotUserId();

  const Logout = () => {
    useLogout();
    router.push("/");
  };

  return (
    <>
      <Container>
        <Content>
          <Left>
            <div className="separator"></div>
            <Image src="/img/Logo.svg" alt="Logo" width={306} height={35} />
            <div className="separator"></div>
            <MenuHeaderRelatorios
              IsOpenModalNewReport={() => setModalOpen(true)}
            />
            <MenuHeaderAjuda />
          </Left>

          <Perfil>
            {userProfile?.map((user) => (
              <div
               key={user.id}
               className="content_perfil">
                <Avatar>
                  <AvatarImage src={user?.avatar} alt="Avatar" />
                  <AvatarFallback>
                    {user?.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="name_perfil">
                  <h1>{user?.name}</h1>
                  <p>{user?.perfil}</p>
                </div>
              </div>
            ))}
            <MenuPerfil />

            <Link href="#">
              <div className="notification">
                <Bell size={32} />
                <div>
                  <span>8</span>
                </div>
              </div>
            </Link>
            <button className="btm_Sair" onClick={Logout}>
              <span>Sair</span>
            </button>
          </Perfil>
        </Content>
      </Container>

      <ModalNewReport isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
