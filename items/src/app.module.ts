import { Module } from '@nestjs/common';
import { ItemController } from './controller/item.controller';
import { ItemService } from './service/item.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [ItemController],
  providers: [ItemService],
})
export class AppModule {}
