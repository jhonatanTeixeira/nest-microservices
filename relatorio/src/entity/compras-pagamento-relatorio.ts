import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario';
import { Compras } from './compras';
import { Pagamentos } from './pagamentos';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ComprasPagamentoRelatorio {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column((type) => Usuario)
  @ApiProperty()
  usuario: Usuario;

  @Column((type) => Compras)
  @ApiProperty()
  compras: Compras;

  @Column((type) => Pagamentos)
  @ApiProperty()
  pagamentos: Pagamentos;
}
