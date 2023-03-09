import { useState, useEffect } from "react";

import { onSnapshot, query, collection, where, getFirestore } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@services/auth/firebaseAuth";
import { IUsers } from "src/@types/typesReport";

//hook para listar perfil de usuário logado
export function useOnSnapshotUserId() {
  const [user] = useAuthState(auth);
  const [userProfile, setUserProfile] = useState<IUsers[]>([]);
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

  return { userProfile };

}
