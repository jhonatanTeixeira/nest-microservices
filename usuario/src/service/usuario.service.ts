import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { Usuario } from '../entity/usuario';

@Injectable()
export class UsuarioService extends TypeOrmCrudService<Usuario> {
  constructor(@InjectRepository(Usuario) repository) {
    super(repository);
  }
}
