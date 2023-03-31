import styled from "styled-components";

export const Container = styled.div`
  padding: 2.4rem 4rem 2.4rem 4rem;
  margin-left: 0.1rem;

  > h1 {
    font-size: 2.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.BLUE_400};
  }
  > h2 {
    padding-top: 1.6rem;
    font-size: 1.4rem;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;