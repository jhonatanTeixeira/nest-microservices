import {Item} from "./item";
import {FieldSet} from "./field-set";
import {Field} from "./field";

export class Value {
    id: number;

    value: string;

    item: Item;

    field: Field;

    fieldSet: FieldSet;
}
