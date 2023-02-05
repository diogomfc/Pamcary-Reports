import styled from "styled-components";

export const Container = styled.div`
  padding: 1.6rem 4rem 1.6rem 4rem;
  margin-left: 0.1rem;
`;

export const Label = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Guias = styled.div`
 display: flex;
 grid-template-columns: 1fr;
 gap: .4rem;
 margin-top: .2rem;

 height: .3rem;
 width: 8.5rem;
 border-radius: .5rem;
 background-color:${({ theme }) => theme.COLORS.BLUE_400};
`;

export const LineGuia = styled.div`
  height: .1rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;