import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Compra } from '../entity/compra/compra';
import { CompraService } from '../service/compra.service';
import { PagamentoService } from '../service/pagamento.service';
import { Pagamento } from '../entity/pagamento/pagamento';

@Controller()
export class IntegrationController {
  constructor(
    readonly compraService: CompraService,
    readonly pagamentoService: PagamentoService,
  ) {}

  @EventPattern('compra-criada')
  integrateCompra(@Payload() compra: Compra) {
    return this.compraService.integrateCompra(compra);
  }

  @EventPattern('pagamento-efetuado')
  integratePagamento(@Payload() pagamento: Pagamento) {
    return this.pagamentoService.integratePagamento(pagamento);
  }
}
