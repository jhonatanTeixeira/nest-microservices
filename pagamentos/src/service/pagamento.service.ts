import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Pagamento } from '../entity/pagamento';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PagamentoService extends TypeOrmCrudService<Pagamento> {
  constructor(@InjectRepository(Pagamento) repository) {
    super(repository);
  }
}
