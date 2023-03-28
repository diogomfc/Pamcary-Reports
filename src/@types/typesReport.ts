
export interface IUsers{
  avatar: string;
  email: string;
  id: string;
  name: string;
  perfil: string;
  status: boolean;
  uid: string;
  created_in: string;
}
export interface IReportsV2 {
  id: string;
  created_in: string;
  finished_in: string;
  status: string;
  manager: string;
  cliente: string;
  cnpj: string;
  revisor: string;
  user: IUsers;
  step1_Cliente_Segurado?: I1_Cliente_Segurado;
  step2_Caracteristica_Sinistro?: I2_Caracteristica_Sinistro;
  step3_Cronologia_Sinistro?: I3_Cronologia_Sinistro;
  step4_Carregamento?: I4_Carregamento;
  step5_Motorista?: I5_Motorista;
  step6_Ajudantes?: I6_Ajudantes;
  step7_Veiculo_Transportador?: I7_Veiculo_Transportador;
  step8_Orgao_Policial?: I8_Orgao_Policial;
  step9_Gerenciamento_Risco?: I9_Gerenciamento_Risco;
  step10_Sistema_Protecionais_Carregamento?: I10_Sistema_Protecionais_Carregamento;
  step11_Declaracao_Motorista_Ajudante?: I11_Declaracao_Motorista_Ajudante;
  step12_Gerenciamento_Risco_Deposito?: I12_Gerenciamento_Risco_Deposito;
  step13_Locais_do_Evento?: I13_Locais_do_Evento;
  step14_Resumo_Averiguacoes?: I14_Resumo_Averiguacoes;
  step15_Recuperacao_Carga?: I15_Recuperacao_Carga;
  step16_Anexos_Fotograficos?: I16_Anexos_Fotograficos;
  step17_Conclusao?: I17_Conclusao;
}
export interface I1_Cliente_Segurado{
  userId?: string;
  n_processo?: string;
  n_step?: string;
  status: string;
  cliente: string;
  cnpj: string;
  logradouro: string; //endereco
  bairro: string;
  localidade: string; //cidade
  uf: string; // estado
  cep: string;
  telefone: string;
  celular: string;
  email: string;
  contato: string;
  notas: string;
}

export interface I2_Caracteristica_Sinistro{
  userId: string;
  n_processo: string;
  n_step: string;
  status: string;
  seguradora: string;
  natureza_do_evento: string;
  carga_embarcada: string;
  valor_da_carga: string;
  notas: string;
}
export interface I3_Cronologia_Sinistro {
  userId?: string;
  n_processo?: string;
  n_step?: string;
  status: string;
  comunicante: string;
  data_hora_comunicacao_cia: string;
  data_hora_sinistro: string;
  local_sinistro: string;
  data_hora_acionamento_agente: string;
  data_hora_chegada_agente: string;
  notas: string;
}
export interface I4_Carregamento {
  userId?: string;
  n_processo?: string;
  n_step?: string;
  status: string;
  notas: string;
  origem_cidade_uf: string;
  destino_cidade_uf: string;
  transportador: string;
  manifesto: string;
  crtc_dacte: string;
  nota_fiscal: string;
  valor_embarcado: string;
  remetente: string;
  destinatario: string;
}
export interface I5_Motorista {
  n_processo?: string;
  n_step?: string;
  status: string;
  nome: string; 
  vinculo: string;
  data_nascimento: string;
  local_nascimento: string;
  cpf: string;
  cnh: string;
  validade_cnh: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  email: string;
  consulta_motorista: string;
  n_consulta_motorista: string;
  telerisco_situacao_motorista: string;
  notas: string;
}
export interface I6_Ajudantes {
  n_processo?: string;
  n_step?: string;
  status: string;
  ajudante1: {
    nome: string;
    vinculo: string;
    data_nascimento: string;
    local_nascimento: string;
    cpf: string;
    cnh: string;
    validade_cnh: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    email: string;
  };
  ajudante2: {
    nome: string;
    vinculo: string;
    data_nascimento: string;
    local_nascimento: string;
    cpf: string;
    cnh: string;
    validade_cnh: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    email: string;
  };
  notas: string;
}
export interface I7_Veiculo_Transportador {
  n_processo?: string;
  n_step?: string;
  status: string;
  cavalo_mecanico: {
    placa: string;
    renavam: string;
    chassi: string;
    marca: string;
    modelo: string;
    ano_fabricacao: string;
    ano_modelo: string;
    cor: string;
    tipo: string;
    capacidade: string;
    tara: string;
    peso_bruto: string;
  };
  carreta: {
    placa: string;
    renavam: string;
    chassi: string;
    marca: string;
    modelo: string;
    ano_fabricacao: string;
    ano_modelo: string;
    cor: string;
    tipo: string;
    capacidade: string;
    tara: string;
    peso_bruto: string;
  };
  notas: string;
}
export interface I8_Orgao_Policial {
  n_processo?: string;
  n_step?: string;
  status: string;
  delegacia: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone: string;
  boletim_ocorrencia: string;
  data_boletim_ocorrencia: string;
  inquerito_policial: string;
  data_inquerito_policial: string;
  notas: string;
}
export interface I9_Gerenciamento_Risco {
  n_processo?: string;
  n_step?: string;
  status: string;
  rastreamento: {
    equipamento: string;
    tipo: string;
    marca: string;
    modelo: string;
    intervalo_rastreamento: string;
    sensores_atuadores: {
      bloqueador_combustivel: string;
      trava_5_roda: string;
      sensor_portas_baú: string;
      ignição_eletrônica: string;
      isca: string;
      alarmes_sonoros_visuais: string;
      trava_portas_bau: string;
      botao_panico: string;
      vandalismo_equipamento_veiculo_nao_localizado: string;
      teclado: string;
      sensor_desengate_carreta: string;
      outros: string;
    };
    segunda_tecnologia: string;
  };
  central_monitoramento: {
    plano_de_viagem: string;
    paradas_durante_viagem: string;
    macros_enviadas_central_monitoramento: string;
    vandalismo_equipamento_monitoramento: string;
    bloqueador_sinal_rastreamento: string;
    disparo_sirene: string;
    historico_posicao_rastreamento: string;
    detalhes_historico_rastreamento: string;
    data_ultima_posicao: string;
    hora_ultima_posicao: string;
    localizacao_ultima_posicao: string;
    possui_tacografo: string;
    discos_coletados_analisados: string;
    detalhes_discos_coletados_analisados: string;
  };
  notas: string;
}
export interface I10_Sistema_Protecionais_Carregamento {
  n_processo?: string;
  n_step?: string;
  status: string;
  escolta: string;
  comboio: string;
  notas: string;
}
export interface I11_Declaracao_Motorista_Ajudante {
  n_processo?: string;
  n_step?: string;
  status: string;
  declaracao_motorista_aceite: string;
  narrativa: string;
  notas: string;
}
export interface I12_Gerenciamento_Risco_Deposito {
  n_processo?: string;
  n_step?: string;
  status: string;
  deposito_exclusivo_segurado: string;
  mercadoria_carregada_veiculo: string;
  deposito_seguranca_eletronica: string;
  dispositos_seguranca: {
    cftv: string;
    cerca_eletrica: string;
    sensores_presenca: string;
    sirene: string;
    botao_panico: string;
    alarmes: string;
    sensores_invasao: string;
    outros: string;
  };
  deposito_seguranca_fisica: string;
  seguranca_patrimonial: {
    empresa: string;
    responsaval: string;
  };
  notas: string;
}
export interface I13_Locais_do_Evento {
  n_processo?: string;
  n_step?: string;
  status: string;
  registro_localizacao_evento_01: {
    descricao: string;
    data: string;
    hora: string;
    latitude_longitude: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    cameras_cftv: string;
    testemunhas: string;
    registro_fotografico: string;
  };
  registro_localizacao_evento_02: {
    descricao: string;
    data: string;
    hora: string;
    latitude_longitude: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
    cameras_cftv: string;
    testemunhas: string;
    registro_fotografico: string;
  };
  notas: string;
}
export interface I14_Resumo_Averiguacoes {
  n_processo?: string;
  n_step?: string;
  status: string;
  resumo_averiguacoes: string;
  notas: string;
}
export interface I15_Recuperacao_Carga {
  n_processo?: string;
  n_step?: string;
  status: string;
  recuperacao_carga: string;
  carga_liberada_auto_entrega: string;
  notas: string;
}
export interface I16_Anexos_Fotograficos {
  n_processo?: string;
  n_step?: string;
  status: string;
  anexos_fotograficos: string;
  notas: string;
}
export interface I17_Conclusao {
  n_processo?: string;
  n_step?: string;
  status: string;
  conclusao: string;
  notas: string;
}


