import {Injectable} from "@nestjs/common";
import {ElasticsearchService} from "@nestjs/elasticsearch";
import {Item} from "../entity/item";

@Injectable()
export class ItemService {
  constructor(
    readonly elastic: ElasticsearchService,
  ) {}

  saveItem(item: Item) {
  }
}
