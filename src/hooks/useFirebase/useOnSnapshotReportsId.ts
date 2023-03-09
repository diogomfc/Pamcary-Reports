import { useState, useEffect } from "react";

import { onSnapshot, query, collection, where, getFirestore } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@services/auth/firebaseAuth";
import { IReportsV2 } from "src/@types/typesReport";

type UseOnSnapshotReports = {
  snapshotReportsID: IReportsV2[];
  loadSnapshot: boolean;
};

//Lista de relatórios por ID do relatório
export function useOnSnapshotReportsId(id: string): UseOnSnapshotReports {
  const [user] = useAuthState(auth);
  const [snapshotReportsID, setSnapshotReportsID] = useState<IReportsV2[]>([]);
  const [loadSnapshot, setLoadSnapshot] = useState(true);

  const db = getFirestore();

  useEffect(() => {
    const q = query(
      collection(db, "reportsV2"), where("id", "==", id)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reports: IReportsV2[] = [];
      querySnapshot.forEach((doc) => {
        reports.push({
          id: doc.id,
          ...doc.data(),
        } as IReportsV2);
      });
      setSnapshotReportsID(reports);
      setLoadSnapshot(false);
    });

    return unsubscribe;
  }, [user?.uid]);

  return { snapshotReportsID, loadSnapshot };
}
