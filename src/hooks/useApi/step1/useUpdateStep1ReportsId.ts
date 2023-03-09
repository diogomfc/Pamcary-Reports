import { BASE_URL_DEV } from "@services/utils/baseURl";
import { I1_Cliente_Segurado } from "src/@types/typesReport";

//UPDATE do step1_Cliente_Segurado vinculado ao número de processo
export async function useUpdateStep1ReportsId(id: string, data: I1_Cliente_Segurado) {
  try {
    await fetch(`${BASE_URL_DEV}/reports/step1_Cliente_Segurado/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
}