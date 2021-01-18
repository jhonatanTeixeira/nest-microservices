import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Compra } from './compra';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class ItemCompra {
  @PrimaryGeneratedColumn()
  @ApiProperty({readOnly: true})
  id: number;

  @Column()
  @ApiProperty()
  nome: string;

  @Column()
  @ApiProperty()
  descricao: string;

  @Column()
  @ApiProperty()
  preco: number;

  @ManyToOne(() => Compra, (compra) => compra.items)
  compra: Compra;
}
