import {CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Compra } from '../entity/compra';
import { ClientKafka } from '@nestjs/microservices';
import { Request } from 'express';

@Injectable()
export class CompraRealizadaInterceptor implements NestInterceptor<Compra> {
  constructor(@Inject('KAFKA_CLIENT') readonly kafkaClient: ClientKafka) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<Compra>,
  ): Observable<Compra> | Promise<Observable<Compra>> {

    return next.handle().pipe(
      tap((compra) => {
        if (context.switchToHttp().getRequest<Request>().method == 'POST') {
          this.kafkaClient.emit('compra-criada', compra);
        }
      }),
    );
  }
}
