
import { X } from "phosphor-react";
import { 
  Container,
  Backdrop,
  ContentModal,
  HeaderModal,
  TitleModal,
  CloseModal,
  BodyModal,
  FooterModal,
  ButtonCancel,
  ButtonSave,
  ImgHeaderModal,
  SubTitleModal,
 } from "./styles";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  titleModal: string;
  descriptionModal: string;
  iconHeaderModal: string;

}

export function Modal({ 
  children, 
  isOpen, 
  onClose,
  iconHeaderModal,
  titleModal,
  descriptionModal,
}: ModalProps) {

  if(!isOpen) return null;

  return(
    <Container>
       <Backdrop>
        <ContentModal>
          <HeaderModal>
            <CloseModal 
            onClick= {onClose}
            title="Fechar Modal"
            >
             {<X size={25} />}
            </CloseModal>
            <ImgHeaderModal src={iconHeaderModal} alt="Icon Header Modal" />
            <TitleModal>
              {titleModal}
            </TitleModal>
            <SubTitleModal>
              {descriptionModal}
            </SubTitleModal>
          </HeaderModal>

          <BodyModal>
            {children}
          </BodyModal>

          {/* <FooterModal>
           <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
           <ButtonSave onClick={onClose}>Salvar</ButtonSave>
          </FooterModal> */}

        </ContentModal>
       </Backdrop>
    </Container>
  )
}
