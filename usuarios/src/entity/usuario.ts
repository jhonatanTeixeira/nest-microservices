import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Endereco } from './endereco';
import moment from 'moment';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false, unique: true })
  @Index()
  email: string;

  @Column({ nullable: false })
  dataNascimento: Date;

  @OneToMany(() => Endereco, (endereco) => endereco.usuario, { eager: true })
  enderecos: Endereco[];

  get idade() {
    return moment.duration(moment(this.dataNascimento).diff(moment())).years();
  }
}
