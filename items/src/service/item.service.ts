import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../entity/item';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService extends TypeOrmCrudService<Item> {
  constructor(@InjectRepository(Item) itemRepository) {
    super(itemRepository);
  }

  getFieldSet(itemId: number) {
    return this.repo.findOneOrFail(itemId, {relations: ['fieldSet', 'fieldSet.fields']})
      .then(item => item.fieldSet)
  }
}
