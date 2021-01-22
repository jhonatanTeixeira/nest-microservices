import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../entity/item';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import {Inject, Injectable} from '@nestjs/common';
import {ClientKafka} from "@nestjs/microservices";
import {classToPlain} from "class-transformer";

@Injectable()
export class ItemService extends TypeOrmCrudService<Item> {
  constructor(
    @InjectRepository(Item) itemRepository,
    @Inject('KAFKA_CLIENT') readonly kafkaClient: ClientKafka,
  ) {
    super(itemRepository);
  }

  getFieldSet(itemId: number) {
    return this.repo.findOneOrFail(itemId, {relations: ['fieldSet', 'fieldSet.fields']})
      .then(item => item.fieldSet)
  }

  emitItem(event: string, item: Item) {
    console.log('plain', classToPlain(item, {ignoreDecorators: true, enableCircularCheck: true}));
    return this.kafkaClient.emit(event, classToPlain(item)).subscribe(r => console.log(r));
  }
}
