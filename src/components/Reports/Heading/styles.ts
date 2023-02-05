import styled from "styled-components";

export const Container = styled.div`
  padding: 2.4rem 4rem 2.4rem 4rem;
  margin-left: 0.1rem;

  > h1 {
    font-size: 4rem;
    letter-spacing: 0.1rem;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.BLUE_400};
  }
  > h2 {
    padding-top: 1.6rem;
    font-size: 1.6rem;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;