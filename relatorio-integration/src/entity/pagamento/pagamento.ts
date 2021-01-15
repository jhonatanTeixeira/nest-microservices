import { Cartao } from './cartao';

export interface Pagamento {
  id: number;

  cartao: Cartao;

  idCompra: number;

  idUsuario: number;

  valorPago: number;
}
