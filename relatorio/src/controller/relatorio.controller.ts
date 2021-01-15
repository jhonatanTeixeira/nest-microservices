import { Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ComprasPagamentoRelatorio } from '../entity/compras-pagamento-relatorio';
import { ComprasPagamentoRelatorioService } from '../service/compras-pagamento-relatorio.service';
import { ApiParam, ApiResponse } from '@nestjs/swagger';

@Crud({
  model: {
    type: ComprasPagamentoRelatorio,
  },
})
@Controller()
export class RelatorioController implements CrudController<ComprasPagamentoRelatorio> {
  constructor(readonly service: ComprasPagamentoRelatorioService) {}

  @Get('users/:userId')
  @ApiResponse({type: ComprasPagamentoRelatorio})
  @ApiParam({name: 'userId'})
  getByUser(@Param('userId') userId) {
    return this.service.getByUser(userId);
  }
}
