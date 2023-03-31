import styled, {keyframes} from 'styled-components'

const AnimateAlerta = keyframes`
    0%, 100% {
      opacity: 1;
    }
    50%{
        opacity: 0;
    }
`


export const Container = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(228, 235, 254, 1),
    rgba(211, 243, 240, 1)
  );
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.1);

  padding: 1.4rem 4rem 2.4rem 4rem;

  margin-left: 0.1rem;
`
export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 2.6rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;

  .item{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .item > h2 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
  .item > span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
   
   #Revisando{
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 1.8rem;
      width: 1.8rem;
      border-radius: 50%;

      animation: ${AnimateAlerta} 3s infinite;

      background: ${(props) => props.theme.COLORS.ORANGE};
      border: ${(props) => props.theme.COLORS.ORANGE};
      color: ${(props) => props.theme.COLORS.WHITE};

      box-shadow: ${(props) => props.theme.COLORS.ORANGE} 0px 1px 20px;

      >span{
        padding-top: 0.2rem;
      }
    }

    .TitleStep {
      >h1 {
        font-weight: normal;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.ORANGE};
      }
    }
  }

  #Aprovado{
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 1.8rem;
      width: 1.8rem;
      border-radius: 50%;

      animation: ${AnimateAlerta} 3s infinite;

      background: ${(props) => props.theme.COLORS.GREEN_400};
      border: ${(props) => props.theme.COLORS.GREEN_400};
      color: ${(props) => props.theme.COLORS.WHITE};

      box-shadow: ${(props) => props.theme.COLORS.GREEN_400} 0px 1px 20px;

      >span{
        padding-top: 0.2rem;
      }
    }

    .TitleStep {
      >h1 {
        font-weight: normal;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.GREEN_400};
      }
    }
  }

  #Emitido{
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 1.8rem;
      width: 1.8rem;
      border-radius: 50%;

      animation: ${AnimateAlerta} 3s infinite;

      background: ${(props) => props.theme.COLORS.GREEN_400};
      border: ${(props) => props.theme.COLORS.GREEN_400};
      color: ${(props) => props.theme.COLORS.WHITE};

      box-shadow: ${(props) => props.theme.COLORS.GREEN_400} 0px 1px 20px;

      >span{
        padding-top: 0.2rem;
      }
    }

    .TitleStep {
      >h1 {
        font-weight: normal;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.GREEN_400};
      }
    }
  }

  #Formalizando{
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 1.8rem;
      width: 1.8rem;
      border-radius: 50%;

      animation: ${AnimateAlerta} 3s infinite;

      background: ${(props) => props.theme.COLORS.BLUE_400};
      border: ${(props) => props.theme.COLORS.BLUE_400};
      color: ${(props) => props.theme.COLORS.WHITE};

      box-shadow: ${(props) => props.theme.COLORS.BLUE_400} 0px 1px 20px;

      >span{
        padding-top: 0.2rem;
      }
    }

    .TitleStep {
      >h1 {
        font-weight: normal;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.BLUE_400};
      }
    }
  }

  #Cancelado{
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 0.8rem;

    .CircleStep {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 1.8rem;
      width: 1.8rem;
      border-radius: 50%;

      animation: ${AnimateAlerta} 3s infinite;

      background: ${(props) => props.theme.COLORS.RED};
      border: ${(props) => props.theme.COLORS.RED};
      color: ${(props) => props.theme.COLORS.WHITE};

      box-shadow: ${(props) => props.theme.COLORS.RED} 0px 1px 20px;

      >span{
        padding-top: 0.2rem;
      }
    }

    .TitleStep {
      >h1 {
        font-weight: normal;
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.RED};
      }
    }
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

  
  .data{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    gap: 0.2rem;
  }
  
`
// export const ResumoReportItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   > h2 {
//     font-size: 1.6rem;
//     color: ${({ theme }) => theme.COLORS.GRAY_600};
//   }
//   > span {
//     font-size: 1.6rem;
//     color: ${({ theme }) => theme.COLORS.GRAY_400};
//   }


//   #Revisando{
//     display: flex;
//     align-items: center;
//     justify-content: center;
    
//     gap: 0.8rem;

//     .CircleStep {
//       display: flex;
//       align-items: center;
//       justify-content: center;

//       height: 1.8rem;
//       width: 1.8rem;
//       border-radius: 50%;

//       animation: ${AnimateAlerta} 3s infinite;

//       background: ${(props) => props.theme.COLORS.ORANGE};
//       border: ${(props) => props.theme.COLORS.ORANGE};
//       color: ${(props) => props.theme.COLORS.WHITE};

//       box-shadow: ${(props) => props.theme.COLORS.ORANGE} 0px 1px 20px;

//       >span{
//         padding-top: 0.2rem;
//       }
//     }

//     .TitleStep {
//       >h1 {
//         font-weight: normal;
//         font-size: 1.6rem;
//         color: ${(props) => props.theme.COLORS.ORANGE};
//       }
//     }
//   }

//   #Aprovado{
//     display: flex;
//     align-items: center;
//     justify-content: center;
    
//     gap: 0.8rem;

//     .CircleStep {
//       display: flex;
//       align-items: center;
//       justify-content: center;

//       height: 1.8rem;
//       width: 1.8rem;
//       border-radius: 50%;

//       animation: ${AnimateAlerta} 3s infinite;

//       background: ${(props) => props.theme.COLORS.GREEN_400};
//       border: ${(props) => props.theme.COLORS.GREEN_400};
//       color: ${(props) => props.theme.COLORS.WHITE};

//       box-shadow: ${(props) => props.theme.COLORS.GREEN_400} 0px 1px 20px;

//       >span{
//         padding-top: 0.2rem;
//       }
//     }

//     .TitleStep {
//       >h1 {
//         font-weight: normal;
//         font-size: 1.6rem;
//         color: ${(props) => props.theme.COLORS.GREEN_400};
//       }
//     }
//   }

//   #Emitido{
//     display: flex;
//     align-items: center;
//     justify-content: center;
    
//     gap: 0.8rem;

//     .CircleStep {
//       display: flex;
//       align-items: center;
//       justify-content: center;

//       height: 1.8rem;
//       width: 1.8rem;
//       border-radius: 50%;

//       animation: ${AnimateAlerta} 3s infinite;

//       background: ${(props) => props.theme.COLORS.GREEN_400};
//       border: ${(props) => props.theme.COLORS.GREEN_400};
//       color: ${(props) => props.theme.COLORS.WHITE};

//       box-shadow: ${(props) => props.theme.COLORS.GREEN_400} 0px 1px 20px;

//       >span{
//         padding-top: 0.2rem;
//       }
//     }

//     .TitleStep {
//       >h1 {
//         font-weight: normal;
//         font-size: 1.6rem;
//         color: ${(props) => props.theme.COLORS.GREEN_400};
//       }
//     }
//   }

//   #Formalizando{
//     display: flex;
//     align-items: center;
//     justify-content: center;
    
//     gap: 0.8rem;

//     .CircleStep {
//       display: flex;
//       align-items: center;
//       justify-content: center;

//       height: 1.8rem;
//       width: 1.8rem;
//       border-radius: 50%;

//       animation: ${AnimateAlerta} 3s infinite;

//       background: ${(props) => props.theme.COLORS.BLUE_400};
//       border: ${(props) => props.theme.COLORS.BLUE_400};
//       color: ${(props) => props.theme.COLORS.WHITE};

//       box-shadow: ${(props) => props.theme.COLORS.BLUE_400} 0px 1px 20px;

//       >span{
//         padding-top: 0.2rem;
//       }
//     }

//     .TitleStep {
//       >h1 {
//         font-weight: normal;
//         font-size: 1.6rem;
//         color: ${(props) => props.theme.COLORS.BLUE_400};
//       }
//     }
//   }

//   #Cancelado{
//     display: flex;
//     align-items: center;
//     justify-content: center;
    
//     gap: 0.8rem;

//     .CircleStep {
//       display: flex;
//       align-items: center;
//       justify-content: center;

//       height: 1.8rem;
//       width: 1.8rem;
//       border-radius: 50%;

//       animation: ${AnimateAlerta} 3s infinite;

//       background: ${(props) => props.theme.COLORS.RED};
//       border: ${(props) => props.theme.COLORS.RED};
//       color: ${(props) => props.theme.COLORS.WHITE};

//       box-shadow: ${(props) => props.theme.COLORS.RED} 0px 1px 20px;

//       >span{
//         padding-top: 0.2rem;
//       }
//     }

//     .TitleStep {
//       >h1 {
//         font-weight: normal;
//         font-size: 1.6rem;
//         color: ${(props) => props.theme.COLORS.RED};
//       }
//     }
//   }

//   #Neutro {
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     gap: 0.8rem;

//     .CircleStep {
//       display: flex;
//       align-items: center;
//       justify-content: center;

//       height: 3.4rem;
//       width: 3.4rem;
//       border-radius: 50%;
//       color: ${(props) => props.theme.COLORS.GRAY_300};
//       background: ${(props) => props.theme.COLORS.GRAY_50};
//       border: 0.1rem solid ${(props) => props.theme.COLORS.GRAY_300};
//     }
//     .TitleStep {
//       width: 26rem;
     
//       >h1 {
//         font-weight: 300;
//         font-size: 1.6rem;
//         color: ${(props) => props.theme.COLORS.GRAY_300};
//         //letter-spacing: 0.1rem;
//       }
//     }
//   }


//   .ResumoData{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.6rem;
//     color: ${({ theme }) => theme.COLORS.GRAY_400};
//   }
// `

