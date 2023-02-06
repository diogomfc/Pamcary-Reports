import styled from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";

export const Container = styled.div`
`

export const Content = styled.div`
`

export const FormReport = styled.form`
 
`
export const ContentButton = styled.div`
   display: flex;
   justify-content: flex-end;
   //padding-right: 2rem;
`
export const BoxForm = styled.div``

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  padding: 0 4rem 0 4rem;
`
export const TabsList = styled(Tabs.List)`
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
`

export const TabsTrigger = styled(Tabs.Trigger)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.WHITE};

  all: unset;
  cursor: pointer;
  line-height: 1;

  h1{
    padding: 1rem 1rem 1rem 1rem;
    font-size: 1.6rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  &::first-child{
    border-top-left-radius: 6px;
  }
  &::last-child{
    border-top-right-radius: 6px;
  }
  &:hover{
    background-image: linear-gradient(
      to right,
      rgba(228, 235, 254, 1),
      rgba(211, 243, 240, 1)
      );
  }
  &[data-state="active"]{
    color: ${({ theme }) => theme.COLORS.BLUE_400};
    box-shadow: inset 0 -2px 0 0 currentColor, 0 2px 0 0 currentColor;
    h1{
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
  &:focus{
    position: relative;
    //box-shadow: 0 0 0 2px black;
  }

`

export const TabsContent = styled(Tabs.Content)`
   
`
export const ContentInputsCadastro = styled.div`
      display: grid; 
      grid-template-columns: 1fr 1fr;

      grid-gap: 1.6rem;

      padding: 1.6rem 0 1.6rem 0;
      margin-left: 0.1rem;
`


export const ContentTextEditor = styled.div`
  display: flex; 
  //padding: 1.6rem 0 6rem 0;
  padding: 1.6rem 0 1.6rem 0;
`; 