import { ItemCompra } from './item-compra';

export interface Compra {
  id: number;

  data: Date;

  idUsuario: number;

  items: ItemCompra[];

  total: number;
}
