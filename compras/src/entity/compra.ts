import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ItemCompra } from './item-compra';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  data: Date;

  @Column({ nullable: false })
  @Index()
  idUsuario: number;

  @OneToMany(() => ItemCompra, (item) => item.compra, { eager: true })
  items: ItemCompra[];

  get total() {
    let total = 0;

    for (const item of this.items) {
      total += item.preco;
    }

    return total;
  }
}
