import { Module } from '@nestjs/common';
import { PagamentoController } from './controller/pagamento.controller';
import { PagamentoService } from './service/pagamento.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ClientsModule.register([
      {
        name: 'KAFKA_CLIENT',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'pagamentos',
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [PagamentoController],
  providers: [PagamentoService],
})
export class AppModule {}
