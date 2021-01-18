import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Usuario } from '../src/entity/usuario';
import { UsuarioService } from '../src/service/usuario.service';

@Crud({
  model: {
    type: Usuario,
  },
})
@Controller('usuarios')
export class UsuarioController implements CrudController<Usuario> {
  constructor(readonly service: UsuarioService) {}
}
