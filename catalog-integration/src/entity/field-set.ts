import {Field} from "./field";
import {Item} from "./item";

export class FieldSet {
    id: number;

    name: string;

    fields: Field[];

    items: Item[];
}
