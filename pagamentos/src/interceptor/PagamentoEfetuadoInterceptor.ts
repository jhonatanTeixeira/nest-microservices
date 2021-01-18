import {CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ClientKafka } from '@nestjs/microservices';
import { Request } from 'express';
import { Pagamento } from '../entity/pagamento';

@Injectable()
export class PagamentoEfetuadoInterceptor implements NestInterceptor<Pagamento> {
  constructor(@Inject('KAFKA_CLIENT') readonly kafkaClient: ClientKafka) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<Pagamento>,
  ): Observable<Pagamento> | Promise<Observable<Pagamento>> {

    return next.handle().pipe(
      tap((pagamento) => {
        if (context.switchToHttp().getRequest<Request>().method == 'POST') {
          this.kafkaClient.emit('pagamento-efetuado', pagamento);
        }
      }),
    );
  }
}
