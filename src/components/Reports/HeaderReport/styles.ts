import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(228, 235, 254, 1),
    rgba(211, 243, 240, 1)
  );
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.1);

  padding: 2.4rem 4rem 2.4rem 4rem;

  margin-left: 0.1rem;
`

export const Title = styled.h1`
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`
export const ResumoReport = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;
`
export const ResumoReportItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  > h2 {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
  > span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`
