import { useState, useEffect } from "react";

import { onSnapshot, query, collection, where, getFirestore } from "firebase/firestore";
import { IUsers } from "src/@types/typesReport";


//hook para listar todos os usuários da collection users
export function useOnSnapshotAllUsers() {
  const [allUsers, setAllUsers] = useState<IUsers[]>([]);
  const db = getFirestore();

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unAllUsers = onSnapshot(q, (querySnapshot) => {
      const users: IUsers[] = [];
      querySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          ...doc.data(),
        } as IUsers);
      });
      setAllUsers(users);
    });

    return unAllUsers;

  }, []);
  return { allUsers };
}