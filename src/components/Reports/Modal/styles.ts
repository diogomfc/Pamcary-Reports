import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0% {
        transform: translateX(-50px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`

`;

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 122vh;

  padding-bottom: 35rem;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`
export const ContentModal = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  //grid-template-rows: 18rem 1fr;

 
  grid-template-areas:
   "HEADER"
   /* "BODY" */
   ;

  background: ${props => props.theme.COLORS.WHITE};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: .8rem;
  padding: 4rem 5.5rem;

  animation: ${animate} 1s;

  position: relative;
`

export const HeaderModal = styled.div`
 grid-area: HEADER;
`
export const ImgHeaderModal = styled.img`
  padding-bottom: 3rem;
  animation: ${animate} 2s;
`
export const TitleModal = styled.h1`
  font-weight: bold;
  color: ${props => props.theme.COLORS.GRAY_700};
  font-size: 2.8rem;
  padding-bottom: .8rem;
  animation: ${animate} 3s;
`
export const SubTitleModal = styled.span`
  font-size: 1.6rem;
  color: ${props => props.theme.COLORS.GRAY_400};
  padding-bottom: 1.6rem;
  animation: ${animate} 4s;
`
export const CloseModal = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  background: transparent;
  color: ${props => props.theme.COLORS.GRAY_200};

  cursor: pointer;
`

export const BodyModal = styled.div`
  //grid-area: BODY;

  animation: ${animate} 1s;
`

export const FooterModal = styled.div`
  grid-area: FOOTER;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
`
export const ButtonCancel = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-right: 16px;

`
export const ButtonSave = styled.button`
  background: #000;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  transition: 0.2s;

`



