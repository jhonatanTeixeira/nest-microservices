import { Module } from '@nestjs/common';
import { CompraController } from './controller/compra.controller';
import { CompraService } from './service/compra.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ClientsModule.register([
      {
        name: 'KAFKA_CLIENT',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'compras',
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [CompraController],
  providers: [CompraService],
})
export class AppModule {}
