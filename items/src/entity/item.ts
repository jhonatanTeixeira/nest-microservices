import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  categorias: string[];

  @Column()
  descricao: string;

  @Column()
  preco: string;
}
