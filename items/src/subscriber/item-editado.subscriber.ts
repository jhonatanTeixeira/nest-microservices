import {Injectable} from "@nestjs/common";
import {Connection, EntitySubscriberInterface, InsertEvent, UpdateEvent} from "typeorm";
import {Item, Value} from "../entity";
import {InjectConnection} from "@nestjs/typeorm";
import {ItemService} from "../service/item.service";
import {isInstance} from "class-validator";

@Injectable()
export class ItemEditadoSubscriber implements EntitySubscriberInterface {
  constructor(
    @InjectConnection() connection: Connection,
    readonly itemService: ItemService,
  ) {
    connection.subscribers.push(this);
  }

  private getItem(entity: any): Item | void {
    if (isInstance(entity, Item)) {
      return entity;
    }

    if (isInstance(entity, Value)) {
      return entity.item;
    }
  }

  private emit(event, entityEvent: UpdateEvent<any> | InsertEvent<any>) {
    const item = this.getItem(entityEvent.entity);

    if (item) {
      return this.itemService.emitItem(event, item);
    }
  }

  afterUpdate(event: UpdateEvent<any>) {
    this.emit('item-editado', event);
  }

  afterInsert(event: InsertEvent<any>): Promise<any> | void {
    if (isInstance(event.entity, Value)) {
      this.emit('item-editado', event);
    } else {
      this.emit('item-criado', event);
    }
  }
}
