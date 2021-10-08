export interface Acoes extends Array<Acao> {}

export interface Acao {
  id: number;
  codigo: string;
  descricao: string;
  preco: number;
}

export interface AcoesApi {
  payload: Acoes;
}
