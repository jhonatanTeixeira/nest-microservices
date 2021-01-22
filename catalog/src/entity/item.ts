import {Type} from "@nestjs/common";

export interface Item extends Type<{[name: string]: any}> {
  id?: number;
  nome: string;
  descricao: string;
  categorias: string[];
  preco: string[];
}
