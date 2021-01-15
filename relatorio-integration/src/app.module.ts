import { HttpModule, Module } from '@nestjs/common';
import { CompraService } from './service/compra.service';
import { UsuarioService } from './service/usuario.service';
import { ConfigModule } from '@nestjs/config';
import { PagamentoService } from './service/pagamento.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule
  ],
  controllers: [],
  providers: [
    CompraService,
    UsuarioService,
    PagamentoService,
  ],
})
export class AppModule {}
