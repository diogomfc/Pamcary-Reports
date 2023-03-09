import styled from 'styled-components'

export const Container = styled.div`
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_400};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.6rem;
    margin: 0.3rem;
    height: 4.8rem;
    //width: 50%;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-image: linear-gradient(
      to right,
      rgba(228, 235, 254, 1),
      rgba(211, 243, 240, 1)
      );
     
    }

    div:nth-child(-n + 1){
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.COLORS.BLUE_400};
      color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 0.4rem 0 0 0.4rem;
      height: 4.8rem
    }

    div{
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.BLUE_400};
    
      padding: 1rem;
    }

    span{
      padding: 1.2rem 2rem 1.2rem 2rem;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.BLUE_400};
    }

    svg {
      display: flex;
    }
  
`
