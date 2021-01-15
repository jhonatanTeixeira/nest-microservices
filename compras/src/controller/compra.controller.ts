import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Compra } from '../entity/compra';
import { CompraService } from '../service/compra.service';

@Crud({
  model: {
    type: Compra,
  },
})
@Controller()
export class CompraController implements CrudController<Compra> {
  constructor(readonly service: CompraService) {}
}
