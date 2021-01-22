import {HttpModule, HttpService, Logger, Module, OnModuleInit} from '@nestjs/common';
import {CatalogService} from "./service/catalog.service";
import {ConfigModule} from "@nestjs/config";
import {IntegrationController} from "./controller/integration.controller";

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
  ],
  controllers: [IntegrationController],
  providers: [CatalogService],
})
export class AppModule implements OnModuleInit {
  constructor(
    private httpService: HttpService,
  ) {}

  onModuleInit(): any {
    const logger = new Logger('http');

    const axios = this.httpService.axiosRef;

    axios.interceptors.request.use(config => {
      console.log(`starting ${config.method} request to ${config.url}`);
      logger.log(`starting ${config.method} request to ${config.url}`);

      return config;
    });

    axios.interceptors.response.use(
      response => {
        logger.log(`finished ${response.request.method} request to ${response.request.url} with status ${response.status}`);

        return response;
      },
      error => {
        logger.error(`error on ${error.config.method} request to ${error.config.url} with error ${error.message}`);

        return Promise.reject(error);
      }
    )
  }
}
