import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;


  padding-bottom: 9rem;
  padding-top: 15rem;

  height: 100%;
  width: 100%;

  color: ${props => props.theme.COLORS.GRAY_700};

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
  > p{
    font-weight: bold;
    font-size: 1.6rem;
    padding: 1.5rem;
  }
  > span {
    font-size: 1.6rem;
  }
`;
