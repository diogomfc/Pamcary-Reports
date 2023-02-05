import styled,{keyframes} from 'styled-components'

const animate = keyframes`
    0% {
      transform: translateX(0px);
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


export const Container = styled.div`
  width: 348px;
  background: ${({ theme }) => theme.COLORS.GRAY_50};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
`
export const Title = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
`
export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  background-image: linear-gradient(
    to right,
    rgba(221, 225, 232, 1),
    rgba(241, 244, 249, 1)
  );
`
export const StepsReport = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;

`

export const LineMultiSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  animation: ${animate} 0.5s ease;
  transition: opacity 0.5s;

  background: linear-gradient(
      to right,
      transparent calc(11.3% + 1px),
      ${({ theme }) => theme.COLORS.GRAY_50} calc(11.3% + 1px)
    ),
    linear-gradient(
      to right,
      ${({ theme }) => theme.COLORS.GRAY_50} calc(11.3% - 1px),
      lightgrey calc(11.3% - 1px)
    );

  .text {
    background: white;
    font-weight: 900;
    color: #333;
    font-size: 16px;
    padding: 10px;
  }

  .stepStart {
    padding-bottom: 0.6rem !important;
  }

  .stepCenter {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .stepEnd {
    padding-top: 0.6rem !important;
  }
`
