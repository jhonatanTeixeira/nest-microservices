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
      return this.repository.save(value);
  }

  async getValuesForItem(itemId: number) {
      const item = await this.itemRepository.findOneOrFail(itemId, {relations: ['fieldSet']});

      return this.repository.find({
          where: {item: itemId, fieldSet: item.fieldSet.id},
      });
  }

  saveValues(itemId: number, values: Value[]) {
    return this.repository.manager.transaction(em => {
      return this.itemRepository.findOneOrFail(itemId, {relations: ['_values', 'fieldSet']})
        .then(async item => {
          await this.repository.remove(item.values);

          item.values = values

          return this.itemRepository.save(item);
        })
        .then(item => item.values);
    });
  }
}
