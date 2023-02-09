import styled, {keyframes} from "styled-components";
import ReactPaginate from 'react-paginate';

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 10rem;
`;

export const Content = styled.div`
// TITLE = Texto titulo
// PESQUISA = Filtro, Pesquisa de relatórios
// LIST = Lista de relatórios

  display: grid;
  /* margin: 0 auto;
  max-width: 1440px; */
  
  grid-template-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;

    grid-template-areas:
    "HEADING"
    "PESQUISA"
    "LIST";
    ;
`;

export const Heading = styled.div`
  grid-area: HEADING;
  width: 1430px;
  padding-top: 2rem;
`;

export const Pesquisa = styled.div`
grid-area: PESQUISA;
animation: ${animate} .5s;

padding-top: 3rem;

.form-pesquisa{
  display: flex;
  justify-content:space-between;
  align-items:center;
  gap: 2rem;  

  .input-filtro{
    background-color: ${props => props.theme.COLORS.GRAY_100};
    border: 1px solid ${props => props.theme.COLORS.GRAY_300};
    border-radius: 1.6rem;
    padding: 1rem 1rem .8rem 2rem;
    width: 28rem;
    height: 5rem;
    
    font-size: 1.4rem;
    color: ${props => props.theme.COLORS.GRAY_500};
    outline: none;
    transition: all 0.2s ease-in-out;

    &:focus{
      border: 1px solid ${props => props.theme.COLORS.BLUE_400};
    }
  } 

  input{
    width: 100%;
  }
  button{
    width: 20.3rem;
  }
}

`;

export const List = styled.div`
grid-area: LIST;

display: flex;
flex-direction: column;
align-items: center;
text-align: center;

padding-bottom: 9rem;
padding-top: 3rem;


animation: ${animate} .5s;


.main-content-noresult.active{
  visibility: visible;
  opacity:1;
  }

.main-content-result.active{
  visibility: visible;
  opacity:1;
  }

`;

