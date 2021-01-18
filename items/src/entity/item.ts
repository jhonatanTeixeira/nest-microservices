import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {FieldSet} from "./field-set";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  @ApiProperty({readOnly: true})
  id: number;

  @Column()
  @ApiProperty()
  nome: string;

  @Column("text", {array: true})
  @ApiProperty()
  categorias: string[];

  @Column()
  @ApiProperty()
  descricao: string;

  @Column()
  @ApiProperty()
  preco: string;

  @ManyToOne(() => FieldSet, f => f.items, {eager: true})
  @ApiProperty()
  fieldSet: FieldSet;
}
