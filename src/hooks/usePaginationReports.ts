import {useState} from "react";

export function usePaginationReports(reportsUser: any) {
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10; //quantidade de reports por página
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(reportsUser.length / usersPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  
  return {pageCount, changePage, pagesVisited, usersPerPage };
}


 
