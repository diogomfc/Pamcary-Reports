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

  /* height: calc(100vh - 10rem);
    //overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.COLORS.GRAY_300};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    } */
`
