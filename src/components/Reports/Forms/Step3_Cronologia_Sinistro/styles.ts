import styled from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";

export const Container = styled.div``;
export const Content = styled.div``;
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

export const TabsContent = styled(Tabs.Content)``;

export const ContentInputsCadastro = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);

  grid-gap: 0.5rem;
  padding: 1.6rem 0 1.6rem 0;
  margin-left: 0.1rem;

  .input{ 
  }

  .input__cep{
    grid-column: 1 / span 1;
  }
  .input__endereco{
    grid-column: 2 / span 2;
  }
  .input__bairro{
    grid-column: 4 / span 2;
  }
  .input__cidade{
    grid-column: 6 / span 2;
  }
  .input__uf{
    grid-column: 8 / span 1;
  }

  .input__comunicante{
    grid-column: 1 / span 4;
  }
  .input__data_hora_comunicacao_cia{
    grid-column: 5 / span 2;
  }
  .input__data_hora_sinistro{
    grid-column: 7 / span 2;
  }

  .input__agente_acionado{
    grid-column: 1 / span 4;
  }
  .input__data_hora_acionamento_agente{
    grid-column: 5 / span 2;
  }
  .input__data_hora_chegada_agente{
    grid-column: 7 / span 2;
  }
`;

export const ContentTextEditor = styled.div`
  display: flex;
  padding: 1.6rem 0 1.6rem 0;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  //padding-right: 2rem;
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
