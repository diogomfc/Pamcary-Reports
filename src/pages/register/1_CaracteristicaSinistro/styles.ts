import styled from "styled-components";

export const Container = styled.div``

export const Content = styled.div`

`

export const FormReport = styled.form`
  display: grid; 
  //align-items: flex-end;
  grid-template-columns: 1fr 1fr;

  grid-gap: 1.6rem;

  padding: 1.6rem 4rem 2.4rem 4rem;
  margin-left: 0.1rem;
`
export const ContentButton = styled.div`
   display: flex;
   justify-content: flex-end;
 
   grid-column-start: 2;
   //grid-row-end: 3
`