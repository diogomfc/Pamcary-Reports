import styled, { keyframes } from "styled-components";
import ReactPaginate from "react-paginate";

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

  .ToastInfo {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.BLUE_400};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
  }

  .ToastError {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.RED_DARK};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
  }

  .ToastSuccess {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.GREEN_500};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
  }

  .ToastWarning {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    border-radius: 1rem;
    border: 0.1rem solid ${(props) => props.theme.COLORS.ORANGE};
    background-color: ${(props) => props.theme.COLORS.GRAY_700};
  }
`;

export const Content = styled.div`
  // TITLE = Texto titulo
  // PESQUISA = Filtro, Pesquisa de relatórios
  // LIST = Lista de relatórios

  display: grid;
  margin: 0 auto;
  width: 1440px;

  grid-template-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;

  grid-template-areas:
    "HEADING"
    "PESQUISA"
    "LIST"; ;
`;

export const Heading = styled.div`
  grid-area: HEADING;
  width: 100%;

  padding: 1rem 0 1.5rem 0;

  position: relative;
  top:1.6rem;
`;

export const Pesquisa = styled.div`
  grid-area: PESQUISA;
  animation: ${animate} 0.5s;

  display: flex;
  //width: 800px;
  align-items: baseline;
  //justify-content: center;
  gap: 2rem;

  .ContentCard {
    display: flex;
    gap: 1.8rem;
  }

  .InputPesquisa {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    //width: 100%;
  }
`;

export const List = styled.div`
  grid-area: LIST;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding-bottom: 9rem;
  //padding-top: 3rem;

  animation: ${animate} 0.5s;

  .main-content-noresult.active {
    visibility: visible;
    opacity: 1;
  }

  .main-content-result.active {
    visibility: visible;
    opacity: 1;
  }
`;

export const ContentList = styled.div`
  visibility: hidden;
  opacity: 0;

  display: grid;
  margin: 10px auto;
  width: 100%;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme.COLORS.GRAY_100};
  background: ${(props) => props.theme.COLORS.GRAY_50};
  transition: all 0.2s ease-in-out;

  animation: ${animate} 0.5s;

  grid-template-columns: 14rem 14rem 10rem 18rem 18rem 1fr 18rem;

  grid-template-rows: 40px 1fr 50px;
  gap: 0px 0px;
  grid-auto-flow: row;

  grid-template-areas:
    "STATUS N_PROCESSO DATA RESPONSAVEL MANAGER CLIENTE ACOES"
    "ITEM ITEM ITEM ITEM ITEM ITEM ITEM"
    "PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION PAGINATION";
`;

export const Status = styled.div`
  grid-area: STATUS;
  display: flex;
  justify-content: start;
  align-items: center;
  justify-content: start;
  text-align: start;
  padding: 5px 5px 5px 20px;

  cursor: pointer;

  > h2 {
    color: ${(props) => props.theme.COLORS.GRAY_700};
    font-size: 1.4rem;
  }
`;
export const N_Processo = styled.div`
  grid-area: N_PROCESSO;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 5px 5px 10px;

  > h2 {
    color: ${(props) => props.theme.COLORS.GRAY_700};
    font-size: 1.4rem;
  }
`;
export const Data = styled.div`
  grid-area: DATA;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 5px 5px 5px;

  > h2 {
    color: ${(props) => props.theme.COLORS.GRAY_700};
    font-size: 1.4rem;
  }
`;
export const Responsavel = styled.div`
  grid-area: RESPONSAVEL;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: start;
  padding: 5px 5px 5px 10px;

  > h2 {
    color: ${(props) => props.theme.COLORS.GRAY_700};
    font-size: 1.4rem;
  }
`;
export const Manager = styled.div`
  grid-area: MANAGER;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: start;

  padding: 5px 5px 5px 10px;

  > h2 {
    color: ${(props) => props.theme.COLORS.GRAY_700};
    font-size: 1.4rem;
  }
`;
export const Cliente = styled.div`
  grid-area: CLIENTE;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
  padding-left: 1rem;

  > h2 {
    color: ${(props) => props.theme.COLORS.GRAY_700};
    font-size: 1.4rem;
  }
`;
export const Acoes = styled.div`
  grid-area: ACOES;
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.5rem;

  > h2 {
    color: ${(props) => props.theme.COLORS.GRAY_700};
    font-size: 1.4rem;
  }
`;
export const Listagem = styled.div`
  grid-area: ITEM;
  height: 45.5rem;
  text-align: center;
  padding: 5px;

  background: ${(props) => props.theme.COLORS.WHITE};

  a {
    text-decoration-color: ${(props) => props.theme.COLORS.BLUE_400};
  }
`;
export const Pagination = styled.div`
  grid-area: PAGINATION;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 10rem;
    padding-right: 1rem;

    h1 {
      color: ${(props) => props.theme.COLORS.GRAY_200};
      font-size: 1.2rem;
      font-weight: 500;

      span {
        color: ${(props) => props.theme.COLORS.GRAY_300};
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }
`;

export const PaginateStyle = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  display: flex;
  justify-content: center;
  flex-direction: row;
  list-style-type: none;
  margin: 1rem;
  padding: 1rem 5rem;
  gap: 1rem;
  font-size: 1.4rem;
  width: 100%;
  color: ${(props) => props.theme.COLORS.GRAY_500};
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: 1px solid ${(props) => props.theme.COLORS.GRAY_200};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.COLORS.BLUE_300};
      color: ${(props) => props.theme.COLORS.WHITE};
      border-color: transparent;
    }
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: ${(props) => props.theme.COLORS.BLUE_400};
    border-color: transparent;
    color: ${(props) => props.theme.COLORS.WHITE};
    min-width: 32px;
  }
  li.disabled a {
    color: ${(props) => props.theme.COLORS.GRAY_200};
    :hover {
      background-color: transparent;
    }
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;



