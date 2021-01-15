import { Cartao } from './cartao';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column((type) => Cartao)
  cartao: Cartao;

  @Column({ unique: true })
  @Index()
  idCompra: number;

  @Column()
  @Index()
  idUsuario: number;

  @Column()
  valorPago: number;
}
