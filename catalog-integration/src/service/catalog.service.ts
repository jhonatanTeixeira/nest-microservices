import {HttpService, Injectable} from "@nestjs/common";
import {Item} from "../entity";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class CatalogService {
  readonly baseUrl;

  constructor(
    readonly http: HttpService,
    config: ConfigService,
  ) {
    this.baseUrl = config.get('CATALOG_BASE_URL', 'http://catalog-microservice');
  }

  sendItemToCatalog(item: Item) {
    const catalogItem = {
      id: item.id,
      nome: item.nome,
      descricao: item.descricao,
      categorias: item.categorias,
      preco: item.preco,
    };

    for (const value of item.values) {
      catalogItem[value.field.name] = value.value;
    }

    return this.http.post(`${this.baseUrl}`, catalogItem);
  }
}
