import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Pagamento } from '../entity/pagamento';
import { PagamentoService } from '../service/pagamento.service';

@Crud({
  model: {
    type: Pagamento,
  },
})
@Controller()
export class PagamentoController implements CrudController<Pagamento> {
  constructor(readonly service: PagamentoService) {}
}
