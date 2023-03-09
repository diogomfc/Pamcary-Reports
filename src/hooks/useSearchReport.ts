import { useOnSnapshotAllReports } from '@hooks/useFirebase/useOnSnapshotAllReports';
import { useEffect, useState } from 'react';

import { IReportsV2 } from "src/@types/typesReport";

// Hooks para pesquisar relatório por nome do cliente ou número do processo

export function useSearchReport() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<IReportsV2[]>([]);

  const { allReportsSnapshot } = useOnSnapshotAllReports();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const results = allReportsSnapshot.filter((report) =>
      report.cliente.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  }, [search, allReportsSnapshot]);

  return { search, searchResults, handleChange };

}

