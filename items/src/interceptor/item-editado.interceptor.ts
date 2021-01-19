import {CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor} from '@nestjs/common';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ClientKafka} from '@nestjs/microservices';
import {Request} from 'express';
import {Item} from "../entity";

@Injectable()
export class ItemEditadoInterceptor implements NestInterceptor<Item> {
  constructor(@Inject('KAFKA_CLIENT') readonly kafkaClient: ClientKafka) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<Item>,
  ): Observable<Item> | Promise<Observable<Item>> {

    return next.handle().pipe(
      tap((item) => {
        if (context.switchToHttp().getRequest<Request>().method == 'POST') {
          this.kafkaClient.emit('item-criado', item);
        }

        if (context.switchToHttp().getRequest<Request>().method == 'PUT') {
          this.kafkaClient.emit('item-editado', item);
        }
      }),
    );
  }
}
