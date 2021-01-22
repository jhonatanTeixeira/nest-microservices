import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {Crud, CrudController} from '@nestjsx/crud';
import {ItemService} from '../service/item.service';
import {ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {FieldSet, Item, Value} from "../entity";
import {ValueService} from "../service/value.service";

@Crud({
  model: {
    type: Item,
  },
  query: {
    join: {
      fieldSet: {
        eager: true,
      },
    },
  },
})
@Controller('items')
@ApiTags('items')
export class ItemController implements CrudController<Item> {
  constructor(
    readonly service: ItemService,
    readonly valueService: ValueService,
  ) {}

  @Get(':itemId/field-set')
  @ApiOperation({summary: 'get item fieldset'})
  @ApiParam({name: 'id'})
  @ApiResponse({type: FieldSet})
  getFieldSet(@Param('id') itemId: number) {
    return this.service.getFieldSet(itemId);
  }

  @Get(':id/values')
  @ApiOperation({summary: 'get item values'})
  @ApiParam({name: 'id'})
  @ApiResponse({type: Value, isArray: true})
  @UseInterceptors(ClassSerializerInterceptor)
  getValues(@Param('id') itemId: number) {
    return this.valueService.getValuesForItem(itemId);
  }

  @Post(':id/values')
  @ApiOperation({summary: 'save item values'})
  @ApiParam({name: 'id'})
  @ApiBody({type: Value, isArray: true})
  @UsePipes(new ValidationPipe({transform: true}))
  @UseInterceptors(ClassSerializerInterceptor)
  saveValues(@Param('id') itemId: number, @Body(new ParseArrayPipe({items: Value})) values: Value[]) {
    return this.valueService.saveValues(itemId, values);
  }
}
