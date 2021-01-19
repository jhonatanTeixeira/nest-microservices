import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {FieldSet} from "./field-set";
import {ApiProperty} from "@nestjs/swagger";

export enum FieldType {
    STRING = 'string',
    NUMBER = 'number',
    TEXT = 'text',
}

@Entity()
export class Field {
    @PrimaryGeneratedColumn()
    @ApiProperty({readOnly: true})
    id: number;

    @Column()
    @ApiProperty()
    name: string;

    @Column({
        enum: FieldType,
        default: FieldType.STRING,
    })
    @ApiProperty()
    type: FieldType;

    @Column()
    @ApiProperty()
    aggregator: boolean;

    @ManyToOne(() => FieldSet, f => f.fields)
    fieldSet: FieldSet;
}
