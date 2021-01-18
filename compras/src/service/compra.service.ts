import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { Compra } from '../entity/compra';

@Injectable()
export class CompraService extends TypeOrmCrudService<Compra> {
  constructor(@InjectRepository(Compra) repository) {
    super(repository);
  }

  save(compra: Compra) {
    return this.repo.save(compra);
  }
}
