import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class Compras {
  @Column()
  @ApiProperty()
  total: number;

  @Column()
  @ApiProperty()
  valorTotal: number;
}
