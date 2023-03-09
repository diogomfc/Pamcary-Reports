///gerar data e hora atual formatada para pt-BR
export const generateDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const dateNow = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return dateNow;
};

