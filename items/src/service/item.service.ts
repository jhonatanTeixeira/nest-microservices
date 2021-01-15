import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../entity/item';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService extends TypeOrmCrudService<Item> {
  constructor(@InjectRepository(Item) itemRepository) {
    super(itemRepository);
  }
}
