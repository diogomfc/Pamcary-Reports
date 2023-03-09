import { useEffect, useState } from "react";


import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@services/auth/firebaseAuth";
import { IReportsV2 } from "src/@types/typesReport";
import { BASE_URL_DEV } from "@services/utils/baseURl";

//hook para listar relatórios do usuário logado
export function useGetReportsUser() {
  const [user] = useAuthState(auth);
  const [reportsUser, setReportsUser] = useState<IReportsV2[]>([]);
  useEffect(() => {
    if (user) {
      fetch(`${BASE_URL_DEV}/reports/user/${user.uid}`)
        .then((response) => response.json())
        .then((data) => setReportsUser(data));
    }
  }, [user]);

  return { reportsUser };
}