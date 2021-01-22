import {FieldSet} from "./field-set";
import {Value} from "./value";

export class Item {
  id: number;

  nome: string;

  categorias: string[];

  descricao: string;

  preco: number;

  fieldSet: number;

  values: Value[];
}
