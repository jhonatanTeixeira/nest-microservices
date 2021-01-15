import { HttpService, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';
import { ComprasPagamentoRelatorio } from '../entity/relatorio/compras-pagamento-relatorio';
import { Usuario } from '../entity/usuario/usuario';

@Injectable()
export class RelatorioService {
  readonly baseUrl: string;

  constructor(
    readonly config: ConfigService,
    readonly http: HttpService,
  ) {
    this.baseUrl = config.get<string>('RELATORIO_ENDPOINT', 'http://relatorio-microservice');
  }

  getRelatorioByUsuario(usuario: Usuario) {
    return this.http.get<ComprasPagamentoRelatorio[]>(`${this.baseUrl}/users/${usuario.id}`)
      .pipe(map(r => {
        const data = r.data;

        if (data.length > 0) {
          return data.pop();
        }

        return this.getNewRelatorio(usuario);
      }));
  }

  getNewRelatorio(usuario: Usuario): ComprasPagamentoRelatorio {
    return {
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        idade: usuario.idade,
      },
      compras: {
        total: 0,
        valorTotal: 0,
      },
      pagamentos: {
        total: 0,
        valorTotal: 0,
        bandeiras: [],
      }
    }
  }

  save(relatorio: ComprasPagamentoRelatorio) {
    return this.http.request<ComprasPagamentoRelatorio>({
      method: relatorio.id ? 'PUT': 'POST',
      data: relatorio
    });
  }
}
