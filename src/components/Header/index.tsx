import Image from 'next/image'
import Link from 'next/link'
import { Bell } from 'phosphor-react'

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

export function Header() {
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
          <div className="content_perfil">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/1164541?v=4"
                alt="Colm Tuite"
              />
              <AvatarFallback delayMs={600}>
                <span>CT</span>
              </AvatarFallback>
            </Avatar>

            <div className="name_perfil">
              <h1>Diogo@Diogo</h1>
              <p>Admin</p>
            </div>
          </div>

          <MenuPerfil />

          <Link href="#">
            <div className="notification">
              <Bell size={32} />
              <div>
                <span>8</span>
              </div>
            </div>
          </Link>
          <button className="btm_Sair">
            <span>Sair</span>
          </button>
        </Perfil>
      </Content>
    </Container>
  )
}
