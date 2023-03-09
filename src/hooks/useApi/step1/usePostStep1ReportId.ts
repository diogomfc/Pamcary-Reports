//Hook para cadastrar step1 na collection reports 
import { BASE_URL_DEV } from "@services/utils/baseURl";
import { I1_Cliente_Segurado } from "src/@types/typesReport";

export async function usePostStep1ReportId(id: string, data: I1_Cliente_Segurado) {
    try {
        const response = await fetch(`${BASE_URL_DEV}/reports/${id}/step1_Cliente_Segurado`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } 
    catch (error) {
        console.log(error);
      }
}
