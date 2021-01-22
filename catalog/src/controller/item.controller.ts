import {Controller, Post} from "@nestjs/common";
import {Item} from "../entity/item";
import {ItemService} from "../service/item.service";

@Controller()
export class ItemController {
  constructor(
    private itemService: ItemService,
  ) {}

  @Post()
  saveItem(item: Item) {
    this.itemService;
  }
}
