import { BASE_URL_DEV } from "@services/utils/baseURl";
import { I3_Cronologia_Sinistro } from "src/@types/typesReport";

//UPDATE do step2_Caracteristica_Sinistro vinculado ao número de processo
export async function useUpdateStep3ReportId(id: string, data: I3_Cronologia_Sinistro) {
  try {
    await fetch(`${BASE_URL_DEV}/reports/step3_Cronologia_Sinistro/${id}`, {
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