import styled from 'styled-components';

interface ContainerProps {
  backgroundLogin?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
  background-image: url(${(props) => props.backgroundLogin});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 53rem;
  padding: 5rem;

  background-color: ${(props) => props.theme.COLORS.WHITE};
  border-radius: 1.6rem;
  box-shadow: 0px 0px 20px -7px rgba(129,216,247);

`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
   
  padding-bottom: 5rem;

`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  h1{
    font-size: 1.4rem;
    letter-spacing: 0.3rem;
    color: ${(props) => props.theme.COLORS.GRAY_300};
 }
  .linha{
    background:${props => props.theme.COLORS.GRAY_200};
    width: 15%;
    height: 0.1rem;
    line-height: 0;
  }

`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 1.6rem;
`;

export const ContentInputsLogin = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  width: 100%; 

  grid-gap: 1.6rem;

  padding: 1.6rem 0 1.6rem 0;
`;

export const FooterForm = styled.div`
    display: flex;
    align-items: center;
    padding-top: 1.6rem;
    a{
      color: ${(props) => props.theme.COLORS.BLUE_400};
      font-size: 1.4rem;
    }
`;
