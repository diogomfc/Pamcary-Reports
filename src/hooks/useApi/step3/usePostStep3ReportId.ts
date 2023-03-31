//Hook para cadastrar step1 na collection reports 
import { BASE_URL_DEV } from "@services/utils/baseURl";
import { I3_Cronologia_Sinistro } from "src/@types/typesReport";

export async function usePostStep3ReportId(id: string, data: I3_Cronologia_Sinistro) {
    try {
        const response = await fetch(`${BASE_URL_DEV}/reports/${id}/step3_Cronologia_Sinistro`, {
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



