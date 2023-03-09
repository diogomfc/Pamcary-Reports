
// Hook para verificar se o id do relatório tem o _Update na URL
//verificar se tem o _Update na URL e retornar o id sem o _Update
export function useUrlVerify(id: string) {
  if (id.includes("_Update")) {
    const idWithoutUpdate = id.replace("_Update", "");
    return idWithoutUpdate;
  } else {
    return id;
  }
}


