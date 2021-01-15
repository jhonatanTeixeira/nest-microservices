import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class Pagamentos {
  @Column()
  @ApiProperty()
  total: number;

  @Column()
  @ApiProperty()
  valorTotal: number;

  @Column('simple-array')
  @ApiProperty()
  bandeiras: string[];
}
