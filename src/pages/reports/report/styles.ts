import styled from "styled-components";

export const Container = styled.div`

`;

export const Content = styled.div``;

export const LayoutContainer = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 10rem;

`

export const LottieContent = styled.div`
  display: flex;
  flex-direction: column;
  

`

export const LayoutContent = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 0px 0px;
  display: flex;
  flex-direction: column;


  border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

  
`

export const LottieConfetes = styled.div`

  position: relative;
 
  top: 30rem;
  //left:2rem; 
 
  display: flex;
  align-items: center;
  justify-content: center;



`;

export const LottieSuccess = styled.div`
position: relative;
 
 top: 16rem;
 left:2rem; 

 display: flex;
 align-items: center;
 justify-content: center;

`;

export const ContentEmitirRelatorio = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative; 
  bottom: 30rem;

  //padding-top: 9rem;

  //height: 100%;
  //width: 100%;

  color: ${(props) => props.theme.COLORS.GRAY_700};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.5rem;
    h1 {
      font-weight: bold;
      font-size: 2.2rem;
    }
  }
  > p {
    font-weight: bold;
    font-size: 1.6rem;
    padding: 1.5rem;
  }
  > span {
    font-size: 1.6rem;
  }
`;
