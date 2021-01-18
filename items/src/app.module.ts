import {Module} from '@nestjs/common';
import {ItemController} from './controller/item.controller';
import {ItemService} from './service/item.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ValueService} from "./service/value.service";
import {FieldSetService} from "./service/field-set.service";
import {ValueController} from "./controller/value.controller";
import {FieldSetController} from "./controller/field-set.controller";
import {Field, FieldSet, Item, Value} from "./entity"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'sqlite.db',
      entities: [Field, FieldSet, Item, Value],
      synchronize: true,
      logger: "advanced-console",
      logging: "all",
    }),
    TypeOrmModule.forFeature([FieldSet, Item, Value]),
  ],
  controllers: [ItemController, ValueController, FieldSetController],
  providers: [ItemService, ValueService, FieldSetService],
})
export class AppModule {}
