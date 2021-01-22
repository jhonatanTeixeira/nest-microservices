import {Module, OnModuleInit} from '@nestjs/common';
import {ElasticsearchModule, ElasticsearchService} from "@nestjs/elasticsearch";

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://elastic:9200',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(
    private elastic: ElasticsearchService,
  ) {}
  onModuleInit(): any {
    this.elastic.indices.putMapping(
      {
        type: "item",
        body: {
          properties: {
            id: {
              type: "integer",
            },
            nome: {
              type: "keyword"
            },
            descricao: {
              type: "keyword"
            },
            categorias: {
              type: "keyword"
            },
            preco: {
              type: "double"
            }
          }
        }
      }
    )
  }
}
