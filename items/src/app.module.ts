import {Module} from '@nestjs/common';
import {ItemController} from './controller/item.controller';
import {ItemService} from './service/item.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ValueService} from "./service/value.service";
import {FieldSetService} from "./service/field-set.service";
import {FieldSetController} from "./controller/field-set.controller";
import {Field, FieldSet, Item, Value} from "./entity"
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'sqlite.db',
      entities: [Field, FieldSet, Item, Value],
      synchronize: false,
      logger: "advanced-console",
      logging: "all",
    }),
    TypeOrmModule.forFeature([FieldSet, Item, Value]),
    ClientsModule.register([
      {
        name: 'KAFKA_CLIENT',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'items',
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [ItemController, FieldSetController],
  providers: [ItemService, ValueService, FieldSetService],
})
export class AppModule {}
