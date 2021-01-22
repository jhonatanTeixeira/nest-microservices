import {FieldSet} from "./field-set";

export enum FieldType {
    STRING = 'string',
    NUMBER = 'number',
    TEXT = 'text',
}

export class Field {
    id: number;

    name: string;

    type: FieldType;

    aggregator: boolean;

    fieldSet: FieldSet;
}
