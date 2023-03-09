import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 10rem;
`

export const Content = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 0px 0px;
  display: flex;
  flex-direction: column;

 
  border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

  
`
