import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0% {
        transform: translateX(-20px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`

export const ContainerModalNewReport = styled.div`
  .InputNameCliente{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-bottom: 1rem;
  }
  .StatusDataPrevisao{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding-bottom: 1rem;
  }
  .UserSupervisor{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding-bottom: 1rem;
  }
  .ButtonCreateReport{
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`

export const ContainerModalProximaEtapa = styled.div`
  .ContentModal {
    width: 100%;
    height: 100%;
  }

  .CardInfoNewReport{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 35rem;
    padding: 1.6rem;

    background-color: #2ECC71;
    border: 3px solid #13512D;
    border-radius: 0.9rem;
    box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.3);

    gap: 1rem;

    >span{
      font-size: 1.6rem;
      color: ${props => props.theme.COLORS.WHITE};
    }

    >h1{
      font-size: 4rem;
      color: ${props => props.theme.COLORS.WHITE};
    }
  
  }

  .ContentButtonProximaEtapa{
    padding: 2.6rem 0;
  }

  .LinkVoltarListReport{
    a{
      text-decoration: none
    }
    p{
      color: ${props => props.theme.COLORS.BLUE_400};
      font-size: 1.4rem;
    }
  }

`


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

export const FormReport = styled.form``