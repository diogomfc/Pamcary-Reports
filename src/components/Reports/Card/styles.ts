import styled from "styled-components";

interface IContainerProps {
  borderColor: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 18rem;
  height: 7.8rem;

  
  padding: .5rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${(props) => props.borderColor};
  background-color: ${(props) => props.theme.COLORS.GRAY_50};
 
`;

export const Content = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;


   >img{
    padding: .5rem;
   }
   >div{
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .5rem;
     
    span{
      color: ${(props) => props.theme.COLORS.GRAY_300};
      font-size: 1.4rem;
      font-weight: 500;
    }
    h1{
      color: ${(props) => props.borderColor};
      font-size: 3rem;
      font-weight: bold;
    }
   }
`;



