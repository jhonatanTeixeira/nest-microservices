import { Column } from 'typeorm';

export class Cartao {
  @Column()
  bandeira: string;

  @Column()
  token: string;
}
