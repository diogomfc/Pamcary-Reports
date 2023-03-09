import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@services/auth/firebaseAuth"
import { BASE_URL_DEV } from "@services/utils/baseURl";
import { IUsersV2 } from "src/@types/typesReport";

export function useGetAllUsers() {
  const [user] = useAuthState(auth);
  const [allUsers, setAllUsers] = useState<IUsersV2[]>([]);
  useEffect(() => {
    if (user) {
      fetch(`${BASE_URL_DEV}/users`)
        .then((response) => response.json())
        .then((data) => setAllUsers(data));
    }
  }, [user]);

  return { allUsers };
}