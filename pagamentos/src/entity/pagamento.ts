import { Cartao } from './cartao';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn()
  @ApiProperty({readOnly: true})
  id: number;

  @Column((type) => Cartao)
  @ApiProperty({type: Cartao})
  cartao: Cartao;

  @Column({ unique: true })
  @Index()
  @ApiProperty()
  idCompra: number;

  @Column()
  @Index()
  @ApiProperty()
  idUsuario: number;

  @Column()
  @ApiProperty()
  valorPago: number;
}
