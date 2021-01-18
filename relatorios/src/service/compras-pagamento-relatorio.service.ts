import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ComprasPagamentoRelatorio } from '../entity/compras-pagamento-relatorio';

@Injectable()
export class ComprasPagamentoRelatorioService extends TypeOrmCrudService<ComprasPagamentoRelatorio> {
  constructor(@InjectRepository(ComprasPagamentoRelatorio) repository) {
    super(repository);
  }

  getByUser(userId: number) {
    return this.repo.find({usuario: {id: userId}});
  }
}
