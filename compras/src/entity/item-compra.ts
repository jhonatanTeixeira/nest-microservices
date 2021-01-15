import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Compra } from './compra';

@Entity()
export class ItemCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  preco: number;

  @ManyToOne(() => Compra, (compra) => compra.items)
  compra: Compra;
}
