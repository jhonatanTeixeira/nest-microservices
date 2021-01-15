import { Injectable } from '@nestjs/common';
import { Compra } from '../entity/compra/compra';
import { RelatorioService } from './relatorio.service';
import { UsuarioService } from './usuario.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class CompraService {
  constructor(
    readonly relatorioService: RelatorioService,
    readonly usuarioService: UsuarioService,
  ) {}

  integrateCompra(compra: Compra) {
    return this.usuarioService.getUsuario(compra.idUsuario)
      .pipe(switchMap(usuario => {
        return this.relatorioService.getRelatorioByUsuario(usuario)
          .pipe(switchMap(relatorio => {
            relatorio.compras.total++;
            relatorio.compras.valorTotal += compra.total;

            return this.relatorioService.save(relatorio);
          }));
      }));
  }
}
