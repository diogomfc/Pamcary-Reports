import {BASE_URL_DEV} from '../../../services/utils/baseURl';
import { IReportsV2,IUsers} from "src/@types/typesReport";
//Hooks para cadastro de reports na collection reports

export async function usePostReportsUser(data: IReportsV2, user: IUsers) {
  try {
    const response = await fetch(`${BASE_URL_DEV}/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          ...data as IReportsV2,
          user: {
            ...user,
          } as IUsers,
        },
      ),
    });
  } catch (error) {
    console.log(error);
  }
}

