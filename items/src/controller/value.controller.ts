import {Body, Controller, Get, Param, ParseArrayPipe, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {ValueService} from "../service/value.service";
import {ApiBody, ApiResponse} from "@nestjs/swagger";
import {Value} from "../entity/value";

@Controller('values')
export class ValueController {
    constructor(
        private valueService: ValueService,
    ) {}

    @Get('item/:itemId')
    @ApiResponse({type: Value, isArray: true})
    getValuesForItem(@Param('itemId') itemId: number) {
        return this.valueService.getValuesForItem(itemId);
    }

    @Post()
    @ApiBody({type: Value, isArray: true})
    @UsePipes(new ValidationPipe({transform: true}))
    saveValues(@Body(new ParseArrayPipe({items: Value})) values: Value[]) {
        return this.valueService.saveValues(values);
    }
}
