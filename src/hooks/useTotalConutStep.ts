  
import { useState } from 'react';
import {IReportsV2} from 'src/@types/typesReport'

   //localizar o ultimo step preenchido
  export function useTotalCountStep(n_processo: string, data: IReportsV2[]) {
  
    const report = data.find((report) => report.id === n_processo);
    const step1 = report?.step1_Cliente_Segurado?.n_step;
    const step2 = report?.step2_Caracteristica_Sinistro?.n_step;
    const step3 = report?.step3_Cronologia_Sinistro?.n_step;
    const step4 = report?.step4_Carregamento?.n_step;
    const step5 = report?.step5_Motorista?.n_step;
    const step6 = report?.step6_Ajudantes?.n_step;
    const step7 = report?.step7_Veiculo_Transportador?.n_step;
    const step8 = report?.step8_Orgao_Policial?.n_step;
    const step9 = report?.step9_Gerenciamento_Risco?.n_step;
    const step10 = report?.step10_Sistema_Protecionais_Carregamento?.n_step;
    const step11 = report?.step11_Declaracao_Motorista_Ajudante?.n_step;
    const step12 = report?.step12_Gerenciamento_Risco_Deposito?.n_step;
    const step13 = report?.step13_Locais_do_Evento?.n_step;
    const step14 = report?.step14_Resumo_Averiguacoes?.n_step;
    const step15 = report?.step15_Recuperacao_Carga?.n_step;
    const step16 = report?.step16_Anexos_Fotograficos?.n_step;
    const step17 = report?.step17_Conclusao?.n_step;
    const total = [
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
      step8,
      step9,
      step10,
      step11,
      step12,
      step13,
      step14,
      step15,
      step16,
      step17,
    ];
    const totalFiltrado = total.filter((step) => step !== undefined);
    const totalStep = totalFiltrado.length;
 

    return totalStep;
   
  }

  // function useTotalConutStep(n_processo: string, data:) {
  //   const report = snapshotReportsID.find((report) => report.id === n_processo);
  //   const step1 = report?.step1_Cliente_Segurado?.n_step;
  //   const step2 = report?.step2_Caracteristica_Sinistro?.n_step;
  //   const step3 = report?.step3_Cronologia_Sinistro?.n_step;
  //   const step4 = report?.step4_Carregamento?.n_step;
  //   const step5 = report?.step5_Motorista?.n_step;
  //   const step6 = report?.step6_Ajudantes?.n_step;
  //   const step7 = report?.step7_Veiculo_Transportador?.n_step;
  //   const step8 = report?.step8_Orgao_Policial?.n_step;
  //   const step9 = report?.step9_Gerenciamento_Risco?.n_step;
  //   const step10 = report?.step10_Sistema_Protecionais_Carregamento?.n_step;
  //   const step11 = report?.step11_Declaracao_Motorista_Ajudante?.n_step;
  //   const step12 = report?.step12_Gerenciamento_Risco_Deposito?.n_step;
  //   const step13 = report?.step13_Locais_do_Evento?.n_step;
  //   const step14 = report?.step14_Resumo_Averiguacoes?.n_step;
  //   const step15 = report?.step15_Recuperacao_Carga?.n_step;
  //   const step16 = report?.step16_Anexos_Fotograficos?.n_step;
  //   const step17 = report?.step17_Conclusao?.n_step;

  //   const arrayStep = [
  //     step1,
  //     step2,
  //     step3,
  //     step4,
  //     step5,
  //     step6,
  //     step7,
  //     step8,
  //     step9,
  //     step10,
  //     step11,
  //     step12,
  //     step13,
  //     step14,
  //     step15,
  //     step16,
  //     step17,
  //   ];

  //   const arrayStepFiltrado = arrayStep.filter((step) => step !== undefined);
  //   const totalStep = arrayStepFiltrado.length;

  //   return totalStep;
  // }


