import { Usuario } from './usuario';
import { Compras } from './compras';
import { Pagamentos } from './pagamentos';

export interface ComprasPagamentoRelatorio {
  id?: number;

  usuario?: Usuario;

  compras?: Compras;

  pagamentos?: Pagamentos;
}
