import { Injectable } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { UsuarioService } from './usuario.service';
import { switchMap } from 'rxjs/operators';
import { Pagamento } from '../entity/pagamento/pagamento';

@Injectable()
export class PagamentoService {
  constructor(
    readonly relatorioService: RelatorioService,
    readonly usuarioService: UsuarioService,
  ) {}

  integratePagamento(pagamento: Pagamento) {
    return this.usuarioService.getUsuario(pagamento.idUsuario)
      .pipe(switchMap(usuario => {
        return this.relatorioService.getRelatorioByUsuario(usuario)
          .pipe(switchMap(relatorio => {
            relatorio.pagamentos.total++;
            relatorio.pagamentos.valorTotal += pagamento.valorPago;
            relatorio.pagamentos.bandeiras.push(pagamento.cartao.bandeira);

            return this.relatorioService.save(relatorio);
          }));
      }));
  }
}
