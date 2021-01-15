import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from './usuario';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @Column()
  bairro: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  complemento: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.enderecos)
  usuario: Usuario;
}
