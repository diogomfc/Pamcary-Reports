import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@services/auth/firebaseAuth";
import { BASE_URL_DEV } from "@services/utils/baseURl";
import { IUsersV2 } from "src/@types/typesReport";

//hook para listar perfil de usuário logado
export function useProfileUser() {
  const [user] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState<IUsersV2>();
  useEffect(() => {
    if (user) {
      try {
        fetch(`${BASE_URL_DEV}/users/${user.uid}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => setUserProfile(data));
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  return { userProfile };

}