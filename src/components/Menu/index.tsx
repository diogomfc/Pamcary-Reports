import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { MenuItem, ControlledMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { At, Files } from "phosphor-react";
import { Content } from "./styles";

interface ModalProps {
  IsOpenModalNewReport: () => void;
}

function MenuHeaderRelatorios({ IsOpenModalNewReport }: ModalProps) {
  const router = useRouter();
  const ref = useRef(null);
  const [isOpenMenu, setOpenMenu] = useState(false);
  
  return (
    <>
      <Content>
        <div ref={ref} className="btn" onPointerEnter={() => setOpenMenu(true)}>
          <Files alt="Relatórios" size={20} color="#6B7280" />
          <span>Relatórios</span>
        </div>

        <ControlledMenu
          menuClassName="contentMenu"
          state={isOpenMenu ? "open" : "closed"}
          anchorRef={ref}
          onPointerLeave={() => setOpenMenu(false)}
          onClose={() => setOpenMenu(false)}
        >
          <MenuItem className="classMenuItem">
            <div
              className="contentItem"
              onClick={IsOpenModalNewReport}
            >
              <Link href="#">
                <div className="content-right">
                  <Image
                    src="/icons/iconsSubMenu/iconsRelatorios/IconNovoRelatorio.svg"
                    alt="icon"
                    width={49}
                    height={49}
                  />
                </div>
                <div className="content-left">
                  <div>
                    <h3>Novo relatório</h3>
                    <span className="pending-tag">EM BREVE</span>
                  </div>
                  <p>gerar novos relatório de averiguação</p>
                </div>
              </Link>
            </div>
          </MenuItem>

          <MenuItem className="classMenuItem">
            <div className="contentItem">
              <Link href="/reports/register/steps/forms_testes">
                <div className="content-right">
                  <Image
                    src="/icons/iconsSubMenu/iconsRelatorios/IconMeusRelatorios.svg"
                    alt="icon"
                    width={49}
                    height={49}
                  />
                </div>
                <div className="content-left">
                  <div>
                    <h3>Meus relatórios</h3>
                    <span className="pending-tag">EM BREVE</span>
                  </div>
                  <p>Busca por relatórios gerados</p>
                </div>
              </Link>
            </div>
          </MenuItem>

          <MenuItem className="classMenuItem">
            <div className="contentItem">
              <Link href="/reports/list">
                <div className="content-right">
                  <Image
                    src="/icons/iconsSubMenu/iconsRelatorios/IconPesquisarRelatorios.svg"
                    alt="icon"
                    width={49}
                    height={49}
                  />
                </div>
                <div className="content-left">
                  <div>
                    <h3>Pesquisa</h3>
                    <span className="pending-tag">EM BREVE</span>
                  </div>
                  <p>Listagem com todos os relatórios averiguação </p>
                </div>
              </Link>
            </div>
          </MenuItem>

          <div className="container-feedback">
            <div>
              <At color="#202225" size={25} />
            </div>
            <p>
              Duvidas e sugestões. Envie seu feedback para diogomfc@hotmail.com
            </p>
          </div>
        </ControlledMenu>
      </Content>
    </>
  );
}

function MenuHeaderAjuda() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <Content>
      <div ref={ref} className="btn" onPointerEnter={() => setOpen(true)}>
        <Image
          src="/icons/iconsMenu/IconAjuda.svg"
          alt="icon"
          width={16}
          height={16}
        />
        <span>Ajuda</span>
      </div>

      <ControlledMenu
        menuClassName="contentMenu"
        state={isOpen ? "open" : "closed"}
        anchorRef={ref}
        onPointerLeave={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <MenuItem className="classMenuItem">
          <div className="contentItem">
            <Link href="">
              {/* <a> */}
              <div className="content-right">
                <Image
                  src="/icons/iconsSubMenu/iconsAjuda/IconAjudaRelatorio.svg"
                  alt="icon"
                  width={49}
                  height={49}
                />
              </div>
              <div className="content-left">
                <div>
                  <h3>Como gerar um relatório</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>
                  Manual passo a passo de como gerar um relatório de averiguação
                </p>
              </div>
              {/* </a> */}
            </Link>
          </div>
        </MenuItem>

        <div className="container-feedback">
          <div>
            <At color="#202225" size={25} />
          </div>
          <p>
            Duvidas e sugestões. Envie seu feedback para diogomfc@hotmail.com
          </p>
        </div>
      </ControlledMenu>
    </Content>
  );
}

function MenuPerfil() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <Content>
      <div ref={ref} className="btn" onPointerEnter={() => setOpen(true)}>
        <Image
          src="/icons/iconsSubMenu/iconsPerfil/IconMenuPerfil.svg"
          alt="icon"
          width={30}
          height={30}
        />
      </div>

      <ControlledMenu
        menuClassName="contentMenuPerfil"
        state={isOpen ? "open" : "closed"}
        anchorRef={ref}
        onPointerLeave={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <MenuItem className="classMenuItem">
          <div className="contentItem">
            <Link href="">
              {/* <a> */}
              <div className="content-right">
                <Image
                  src="/icons/iconsSubMenu/iconsPerfil/IconEditarPerfil.svg"
                  alt="icon"
                  width={49}
                  height={49}
                />
              </div>
              <div className="content-left">
                <div>
                  <h3>Gerenciar perfil</h3>
                  <span className="pending-tag">EM BREVE</span>
                </div>
                <p>Editar suas informações básicas</p>
              </div>
              {/* </a> */}
            </Link>
          </div>
        </MenuItem>

        <div className="container-feedback">
          <div>
            <At color="#202225" size={25} />
          </div>
          <p>
            Duvidas e sugestões. Envie seu feedback para diogomfc@hotmail.com
          </p>
        </div>
      </ControlledMenu>
    </Content>
  );
}

export { MenuHeaderRelatorios, MenuHeaderAjuda, MenuPerfil };
