import styled,{keyframes} from 'styled-components'

const animateClick = keyframes`
    0% {
        transform: translateX(0px);
        opacity: 0;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`

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

const AnimateAlerta = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50%{
        opacity: 0;
    }
`

export const Container = styled.div`
   >a{
    text-decoration: none;
  }

  .ToastInfo {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.BLUE_400};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
    box-shadow: 0 0 0.05rem ${(props) => props.theme.COLORS.BLUE_400};
  }

  .ToastError{
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.RED_DARK};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
    box-shadow: 0 0 0.05rem ${(props) => props.theme.COLORS.RED_DARK};
  }

  .ToastSuccess{
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    box-shadow: 0 0 0.05rem ${(props) => props.theme.COLORS.GREEN_500};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.GREEN_500};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
  }

  .ToastWarning{
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.ORANGE};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
    box-shadow: 0 0 0.05rem ${(props) => props.theme.COLORS.ORANGE};
  }

`

export const Content = styled.div`
   
   .ToastInfo {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.BLUE_400};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
  }

  .ToastError{
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.RED_DARK};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
  }

  .ToastSuccess{
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.GREEN_500};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
  }

  .ToastWarning{
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.ORANGE};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
  }


  &:hover {
    cursor: pointer;
  }

  .CircleStepNeutro {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3.8rem;
      width: 3.8rem;
      border-radius: 50%;

      background: ${(props) => props.theme.COLORS.WHITE};
  }
    
  .Active{
    animation: ${animateClick} 0.5s ease;
    transition: opacity 0.2s;
    background-image: linear-gradient(
      to Left,
      rgba(0, 120, 190, 0.2),
      rgba(241, 244, 249, 0.1)
    );

  }

  #Neutro {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 3.4rem;
      width: 3.4rem;
      border-radius: 50%;
      color: ${(props) => props.theme.COLORS.GRAY_300};
      background: ${(props) => props.theme.COLORS.GRAY_50};
      border: 0.1rem solid ${(props) => props.theme.COLORS.GRAY_300};
    }
    .TitleStep {
      width: 26rem;
     
      >h1 {
        font-weight: 300;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.GRAY_300};
        //letter-spacing: 0.1rem;
      }
    }
  }

  #Formalizando {
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${animate} 0.5s ease;
    transition: opacity 0.2s;

    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 3.4rem;
      width: 3.4rem;
      border-radius: 50%;

      background: ${(props) => props.theme.COLORS.WHITE};
      border: 0.2rem solid ${(props) => props.theme.COLORS.BLUE_400};
      color: ${(props) => props.theme.COLORS.BLUE_400};
    }
    .TitleStep {
      width: 26rem;
      >h1 {
        font-weight: 500;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.BLUE_400};
      }
    }
  }

  #Revisando {
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 3.4rem;
      width: 3.4rem;
      border-radius: 50%;

      animation: ${AnimateAlerta} 3s infinite;

      background: ${(props) => props.theme.COLORS.ORANGE};
      border: ${(props) => props.theme.COLORS.ORANGE};
      color: ${(props) => props.theme.COLORS.WHITE};

      box-shadow: ${(props) => props.theme.COLORS.ORANGE} 0px 1px 20px;
    }

    .TitleStep {
      width: 26rem;
      >h1 {
        font-weight: normal;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.ORANGE};
      }
    }
  }

  #Aprovado {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 3.4rem;
      width: 3.4rem;
      border-radius: 50%;

      background: ${(props) => props.theme.COLORS.GREEN_400};
      border: 0.1rem solid ${(props) => props.theme.COLORS.GREEN_700};
      color: ${(props) => props.theme.COLORS.WHITE};
    }

    .TitleStep {
      width: 26rem;
      >h1 {
        font-weight: normal;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.GREEN_400};
      }
    }
  }

  #Concluído {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 3.4rem;
      width: 3.4rem;
      border-radius: 50%;

      background: ${(props) => props.theme.COLORS.BLUE_400};
      border: 0.1rem solid ${(props) => props.theme.COLORS.BLUE_400};

      color: ${(props) => props.theme.COLORS.WHITE};
    }

    .TitleStep {
      width: 26rem;
      >h1 {
        font-weight: normal;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.BLUE_400};
      }
    }
  }

  #Emitido {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      animation: ${AnimateAlerta} 3s infinite;

      height: 3.4rem;
      width: 3.4rem;
      border-radius: 50%;

      background: ${(props) => props.theme.COLORS.GREEN_400};
      border: 0.1rem solid ${(props) => props.theme.COLORS.GREEN_700};
      color: ${(props) => props.theme.COLORS.WHITE};
    }

    .TitleStep {
      width: 26rem;
      >h1 {
        font-weight: normal;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.GREEN_400};
      }
    }
  }
  
  #Cancelado {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 3.4rem;
      width: 3.4rem;
      border-radius: 50%;

      animation: ${AnimateAlerta} 3s infinite;
      

      background: ${(props) => props.theme.COLORS.RED};
      border: ${(props) => props.theme.COLORS.RED};
      color: ${(props) => props.theme.COLORS.WHITE};

      box-shadow: ${(props) => props.theme.COLORS.RED} 0px 1px 20px;
    }

    .TitleStep {
      //animation: ${AnimateAlerta} 3s infinite;
      transition: opacity 0.1s;

      width: 26rem;
      >h1 {
        font-weight: normal;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.RED};
        
      }
    }
  }

`
