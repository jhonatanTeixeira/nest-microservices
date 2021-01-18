import {Module} from '@nestjs/common';
import {CompraController} from './controller/compra.controller';
import {CompraService} from './service/compra.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {Compra} from "./entity/compra";
import {ItemCompra} from "./entity/item-compra";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'sqlite.db',
      entities: [Compra, ItemCompra],
      synchronize: true,
      logger: "advanced-console",
      logging: "all",
    }),
    TypeOrmModule.forFeature([Compra]),
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
