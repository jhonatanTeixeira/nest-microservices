import {Controller, UseInterceptors} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {Compra} from '../entity/compra';
import {CompraService} from '../service/compra.service';
import {CompraRealizadaInterceptor} from "../interceptor/CompraRealizadaInterceptor";

@Crud({
  model: {
    type: Compra,
  },
})
@Controller()
@UseInterceptors(CompraRealizadaInterceptor)
export class CompraController implements CrudController<Compra> {
  constructor(readonly service: CompraService) {}
}
