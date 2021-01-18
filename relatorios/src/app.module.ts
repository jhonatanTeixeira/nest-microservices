import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelatorioController } from './controller/relatorio.controller';
import { ComprasPagamentoRelatorioService } from './service/compras-pagamento-relatorio.service';
import { ComprasPagamentoRelatorio } from './entity/compras-pagamento-relatorio';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'sqlite.db',
      entities: [ComprasPagamentoRelatorio],
      synchronize: true,
      logger: "advanced-console",
      logging: "all",
    }),
    TypeOrmModule.forFeature([ComprasPagamentoRelatorio]),
  ],
  controllers: [RelatorioController],
  providers: [ComprasPagamentoRelatorioService],
})
export class AppModule {}
