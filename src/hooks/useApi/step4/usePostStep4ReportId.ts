//Hook para cadastrar step1 na collection reports 
import { BASE_URL_DEV } from "@services/utils/baseURl";
import { I4_Carregamento } from "src/@types/typesReport";

export async function usePostStep4ReportId(id: string, data: I4_Carregamento) {
    try {
        const response = await fetch(`${BASE_URL_DEV}/reports/${id}/step4_Carregamento`, {
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
