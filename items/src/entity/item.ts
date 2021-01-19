import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {FieldSet} from "./field-set";
import {ApiProperty} from "@nestjs/swagger";
import {Value} from "./value";
import {Exclude, Expose} from "class-transformer";
import {isIterable} from "rxjs/internal-compatibility";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  @ApiProperty({readOnly: true})
  id: number;

  @Column()
  @ApiProperty()
  nome: string;

  @Column("simple-array", {array: true})
  @ApiProperty()
  categorias: string[];

  @Column()
  @ApiProperty()
  descricao: string;

  @Column()
  @ApiProperty()
  preco: number;

  @ManyToOne(() => FieldSet, f => f.items, {eager: true, persistence: false})
  @ApiProperty({type: Number, writeOnly: true})
  fieldSet: FieldSet;

  @OneToMany(() => Value, v => v.item, {eager: false, cascade: true})
  @Exclude()
  _values: Value[];

  @Expose()
  get values() {
    return this._values || [];
  }

  set values(values: Value[]) {
    if (!isIterable(values)) {
      return;
    }

    for (const value of values) {
      value.fieldSet = this.fieldSet;
    }

    this._values = values;
  }
}
