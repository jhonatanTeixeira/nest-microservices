import {Field} from "./field";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {Item} from "./item";

@Entity()
export class FieldSet {
    @PrimaryGeneratedColumn()
    @ApiProperty({readOnly: true})
    id: number;

    @Column({nullable: false, unique: true})
    @ApiProperty()
    name: string;

    @OneToMany(() => Field, f => f.fieldSet, {eager: true, cascade: true})
    @ApiProperty({type: Field, isArray: true})
    fields: Field[];

    @OneToMany(() => Item, i => i.fieldSet)
    items: Item[];
}
