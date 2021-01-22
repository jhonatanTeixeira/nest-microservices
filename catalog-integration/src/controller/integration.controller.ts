import {Controller, createParamDecorator, ExecutionContext, ValidationPipe} from "@nestjs/common";
import {EventPattern} from "@nestjs/microservices";
import {Item} from "../entity";
import {CatalogService} from "../service/catalog.service";

const Payload = createParamDecorator((data: any, context: ExecutionContext) => {
  return context.getArgByIndex(0).value;
});

@Controller()
export class IntegrationController {
  constructor(
    private catalogService: CatalogService,
  ) {}

  @EventPattern('item-criado')
  integrateNewItemToCatalog(
    @Payload(new ValidationPipe({validateCustomDecorators: true, transform: true}))
    item: Item,
  ) {
    console.log(item);
    this.catalogService.sendItemToCatalog(item)
      .subscribe();
  }

  @EventPattern('item-editado')
  integrateItemToCatalog(
    @Payload(new ValidationPipe({validateCustomDecorators: true, transform: true}))
    item: Item,
  ) {
    console.log(item);
    this.catalogService.sendItemToCatalog(item).subscribe();
  }
}
