import { Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class Usuario {
  @Column()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  nome: string;

  @Column()
  @ApiProperty()
  idade: number;
}
