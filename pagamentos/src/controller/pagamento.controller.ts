import {Controller, UseInterceptors} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Pagamento } from '../entity/pagamento';
import { PagamentoService } from '../service/pagamento.service';
import {PagamentoEfetuadoInterceptor} from "../interceptor/PagamentoEfetuadoInterceptor";

@Crud({
  model: {
    type: Pagamento,
  },
})
@Controller()
@UseInterceptors(PagamentoEfetuadoInterceptor)
export class PagamentoController implements CrudController<Pagamento> {
  constructor(readonly service: PagamentoService) {}
}
