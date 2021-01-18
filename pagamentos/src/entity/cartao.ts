import { Column } from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

export class Cartao {
  @Column()
  @ApiProperty()
  bandeira: string;

  @Column()
  @ApiProperty()
  token: string;
}
