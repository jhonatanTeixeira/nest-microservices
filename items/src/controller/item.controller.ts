import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Item } from '../entity/item';
import { ItemService } from '../service/item.service';

@Crud({
  model: {
    type: Item,
  },
})
@Controller()
export class ItemController implements CrudController<Item> {
  constructor(readonly service: ItemService) {}
}
