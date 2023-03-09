import { useState, useEffect } from "react";

import { onSnapshot, query, collection, where, getFirestore, orderBy } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@services/auth/firebaseAuth";
import { IReportsV2, IUsers } from "src/@types/typesReport";

type UseOnSnapshotReports = {
  allReportsSnapshot: IReportsV2[];
  loadSnapshot: boolean;
};

export function useOnSnapshotAllReports(): UseOnSnapshotReports {
  const [user] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState<IUsers[]>([]);
  const [allReportsSnapshot, setAllReportsSnapshot] = useState<IReportsV2[]>([]);
  const [loadSnapshot, setLoadSnapshot] = useState(true);

  const db = getFirestore();

  useEffect(() => {
    const q = query(
      collection(db, "users"),
      where("uid", "==", user?.uid)
    );
    const unPerfil = onSnapshot(q, (querySnapshot) => {
      const users: IUsers[] = [];
      querySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          ...doc.data(),
        } as IUsers);
      });
      setUserProfile(users);
    });

    return unPerfil;

  }, [user?.uid]);

  useEffect(() => {
    if (userProfile[0]?.perfil === "Analista") {
      const q = query(
        collection(db, "reportsV2"),
        where("user.uid", "==", user?.uid),
      );
      const unReportUserPerfil = onSnapshot(q, (querySnapshot) => {
        const reports: IReportsV2[] = [];
        querySnapshot.forEach((doc) => {
          reports.push({
            id: doc.id,
            ...doc.data(),
          } as IReportsV2);
        });
        setAllReportsSnapshot(reports);
        setLoadSnapshot(false);
      });

      return unReportUserPerfil;
    } else if (userProfile[0]?.perfil === "Supervisor" || userProfile[0]?.perfil === "Revisor" || userProfile[0]?.perfil === "Admin") {
      const q = query(
        collection(db, "reportsV2"),
      );
      const unReportAllPerfil = onSnapshot(q, (querySnapshot) => {
        const reports: IReportsV2[] = [];
        querySnapshot.forEach((doc) => {
          reports.push({
            id: doc.id,
            ...doc.data(),
          } as IReportsV2);
        });
        setAllReportsSnapshot(reports);
        setLoadSnapshot(false);
      });
    
      return unReportAllPerfil;
    }
  }, [userProfile, user?.uid]);
  
  return { allReportsSnapshot, loadSnapshot };
}
  

