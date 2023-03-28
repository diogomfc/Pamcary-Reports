import styled from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";

export const Container = styled.div``;

export const Content = styled.div``;

export const BackdropSubmitSuccessful = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  top: 0;
  left: 0;
  position: absolute;

  width: 100%;
  height: 122vh;

  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  padding-bottom: 20rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;

    border-radius: 0.8rem;
    background: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

    padding: 2rem 2rem 2rem 2rem;

    height: 30rem;
    width: 50rem;

    > h1 {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
    > a {
      color: ${({ theme }) => theme.COLORS.BLUE_300};
      font-size: 1.2rem;
    }
  }
`;
export const BackdropSubmitting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  top: 0;
  left: 0;
  position: absolute;

  width: 100%;
  height: 122vh;

  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 35rem;

    > span {
      position: relative;
      bottom: 9rem;
      color: ${({ theme }) => theme.COLORS.GRAY_50};
      font-size: 1.6rem;
    }
  }
`;

export const FormReport = styled.form`
  .InfoStausRevisando {
    display: flex;
    align-items: center;
    justify-content: center;
    > h1 {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.ORANGE};
      font-weight: 500;
    }
  }
`;
export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  //padding-right: 2rem;
`;
export const BoxForm = styled.div``;

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  padding: 0 4rem 0 4rem;
`;

export const TabsList = styled(Tabs.List)`
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const TabsTrigger = styled(Tabs.Trigger)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.WHITE};

  all: unset;
  cursor: pointer;
  line-height: 1;

  h1 {
    padding: 1rem 1rem 1rem 1rem;
    font-size: 1.6rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  &::first-child {
    border-top-left-radius: 6px;
  }
  &::last-child {
    border-top-right-radius: 6px;
  }
  &:hover {
    background-image: linear-gradient(
      to right,
      rgba(228, 235, 254, 1),
      rgba(211, 243, 240, 1)
    );
  }
  &[data-state="active"] {
    color: ${({ theme }) => theme.COLORS.BLUE_400};
    box-shadow: inset 0 -2px 0 0 currentColor, 0 2px 0 0 currentColor;
    h1 {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
  &:focus {
    position: relative;
    //box-shadow: 0 0 0 2px black;
  }
`;

export const TabsContent = styled(Tabs.Content)``;

export const ContentInputsCadastro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 1.6rem;

  padding: 1.6rem 0 1.6rem 0;
  margin-left: 0.1rem;
`;


export const ContentInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, 1fr);
  
  grid-gap: 0.5rem;
  padding: 1.6rem 0 1.6rem 0;
  margin-left: 0.1rem;

  //background-color: ${({ theme }) => theme.COLORS.GRAY_50};


  .input{
    //background-color: ${({ theme }) => theme.COLORS.RED};
  }

  ._name{
    //grid-row: 1 / 3;
    grid-column: 1 / span 6;
  }

  ._cnpj{
    //grid-row: 1 / span 2;
    grid-column: 7 / span 2;
  }
  ._cep{
    grid-column: 1 / span 1;
  }

  ._endereco{
    grid-column: 2 / span 2;
  }

  ._bairro{
    grid-column: 4 / span 2;
  }
  ._cidade{
    grid-column: 6 / span 2;
  }
  ._uf{
    grid-column: 8 / span 1;
  }

  ._contato{
    grid-column: 1 / span 2;
  }
  ._celular{
    grid-column: 3 / span 2;
  }
  ._telefone{
    grid-column: 5 / span 2;
  }
  ._email{
    grid-column: 7 / span 2;
  }

`;


export const ContentTextEditor = styled.div`
  display: flex;
  //padding: 1.6rem 0 6rem 0;
  padding: 1.6rem 0 1.6rem 0;
`;
