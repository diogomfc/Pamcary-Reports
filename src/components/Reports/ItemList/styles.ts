import styled, { keyframes } from 'styled-components';

interface ITagProps {
  color: string | undefined;

}

const animate = keyframes`
    0% {
        transform: translateX(-100px);
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
width: 100%;
`;

export const ContainerIntensList = styled.div`
  display: grid;
  grid-template-columns: 1fr 18rem;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "CONTENT-INTENS CONTENT-ACOES";

  margin: 0px auto;
  height: 40px;
  width: 100%;
  margin-bottom: 5px;

  animation: ${animate} .5s ease;
  transition: all .3s;
  
  background-color: rgba(248, 250, 252, 0.5);
  border: 1px solid ${props => props.theme.COLORS.GRAY_100};
  border-radius: .5rem;


    &:hover {
        border: 1px solid rgba(129, 216, 247, 0.5);
        box-shadow: 0px 0px 10px rgba(129, 216, 247, 0.5);
        background-color: #eff6ff;
        
	      transform: scale(1.005);
        cursor: pointer;
    }
`;

export const Content = styled.div`
  grid-area: CONTENT-INTENS;
  display: grid;
  grid-template-columns: 14rem 14rem 10rem 18rem 18rem 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "STATUS N_PROCESSO DATA RESPONSAVEL SUPERVISOR CLIENTE_SEGURADO";
`;

export const Status = styled.div<ITagProps>`
      grid-area: STATUS; 

      display: flex;
      align-items: center;
      

      .Tag{
      width: 8px;
      height: 100%;

      background-color: ${props => props.color};
      margin-right: 5px;
      border-radius: .5rem 0 0 .5rem;
      
      }

      >h2{
        color: ${props => props.color};
        font-size: 1.5rem;
        font-weight: 500; 
        }
 
`;

export const N_Processo = styled.div`
  grid-area: N_PROCESSO;

  display: flex;
  justify-content: start;
  align-items: center;
  

  padding: 5px;

  >h2{
  color: ${props => props.theme.COLORS.GRAY_700};
  font-size: 1.5rem;
  font-weight: 300; 
  }
`;

export const Created_in = styled.div`
  grid-area: DATA;

  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;


  >h2{
    color: ${props => props.theme.COLORS.GRAY_700};
    font-size: 1.5rem;
    font-weight: 300; 
    }

`;

export const Created_User = styled.div`
  grid-area: RESPONSAVEL; 

  display: flex;
  align-items: center;
  justify-content: start;
  text-align: start;
  padding: 5px;
  
  >h2{
    color: ${props => props.theme.COLORS.GRAY_700};
    font-size: 1.5rem;
    font-weight: 300; 
    }
`;

export const Manager = styled.div`
 grid-area: SUPERVISOR; 

  display: flex;
  align-items: center;
  justify-content: start;
  text-align: start;
  padding: 5px;

  >h2{
    color: ${props => props.theme.COLORS.GRAY_700};
    font-size: 1.5rem;
    font-weight: 300; 
    }

`;

export const Cliente_Segurado = styled.div<ITagProps>`
  grid-area: CLIENTE_SEGURADO; 

  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px;

  >h2{
    color: ${props => props.color};
    font-size: 1.5rem;
    font-weight: 500; 
    }
`;


export const Acoes = styled.div`
  grid-area: CONTENT-ACOES; 
  display: flex;

  align-items: center;
  justify-content: end;
  text-align: end;
  padding: 5px;

    >a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-right: 10px;
    
    transition: opacity .2s;

    &:hover {
        opacity: .9;
      }

     >span{
      padding: .5rem;
      font-size: 1.4rem;
      color: #8A92A6;
     }

     .StatusStep{
      display: flex;
      position: relative;
      right: 0.4rem;
      bottom: 0.8rem;
      align-items: center;
      justify-content: center;

      background: ${(props) => props.theme.COLORS.WHITE};
      box-shadow: 0 0 1em ${(props) => props.theme.COLORS.BLUE_300};
      height: 1.8rem;
      width: 1.8rem;
      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.COLORS.BLUE_300};
      line-height: 0;
      color: ${(props) => props.theme.COLORS.BLUE_300};

     }
  }


`;