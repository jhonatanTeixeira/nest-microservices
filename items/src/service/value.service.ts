import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Value} from "../entity/value";
import {Repository} from "typeorm";
import {Item} from "../entity/item";

@Injectable()
export class ValueService {
  constructor(
    @InjectRepository(Value) readonly repository: Repository<Value>,
    @InjectRepository(Item) readonly itemRepository: Repository<Item>,
  ) {}

  save(value: Value) {
      this.repository.save(value);
  }

  async getValuesForItem(itemId: number) {
      const item = await this.itemRepository.findOneOrFail(itemId, {relations: ['fieldSet']});

      return this.repository.find({
          where: {item: itemId, fieldSet: item.fieldSet.id},
      });
  }

  saveValues(values: Value[]) {
      return this.repository.save(values);
  }
}
