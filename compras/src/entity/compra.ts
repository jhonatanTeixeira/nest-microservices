import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ItemCompra } from './item-compra';
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  @ApiProperty({readOnly: true})
  id: number;

  @Column({ nullable: false })
  @ApiProperty()
  data: Date;

  @Column({ nullable: false })
  @Index()
  @ApiProperty()
  idUsuario: number;

  @OneToMany(() => ItemCompra, (item) => item.compra, { eager: true, cascade: true })
  @Type((t) => ItemCompra)
  @ApiProperty({type: ItemCompra, isArray: true})
  items: ItemCompra[];

  get total() {
    let total = 0;

    for (const item of this.items) {
      total += item.preco;
    }

    return total;
  }
}
