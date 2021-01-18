import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {Item} from "./item";
import {FieldSet} from "./field-set";
import {Field} from "./field";

@Entity()
export class Value {
    @PrimaryGeneratedColumn()
    @ApiProperty({readOnly: true})
    id: number;

    @Column({nullable: true})
    @ApiProperty()
    value: string;

    @ManyToOne(() => Item, {eager: true, nullable: false})
    @ApiProperty({writeOnly: true, type: Number})
    item: Item;

    @ManyToOne(() => Field, {eager: true, nullable: false})
    @ApiProperty({type: Number})
    field: Field;

    @ManyToOne(() => FieldSet, {eager: true, nullable: false})
    @ApiProperty({type: Number, writeOnly: true})
    fieldSet: FieldSet;
}
