import { BASE_URL_DEV } from "@services/utils/baseURl";
import { I2_Caracteristica_Sinistro } from "src/@types/typesReport";

//UPDATE do step2_Caracteristica_Sinistro vinculado ao número de processo
export async function useUpdateStep2ReportId(id: string, data: I2_Caracteristica_Sinistro) {
  try {
    await fetch(`${BASE_URL_DEV}/reports/step2_Caracteristica_Sinistro/${id}`, {
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