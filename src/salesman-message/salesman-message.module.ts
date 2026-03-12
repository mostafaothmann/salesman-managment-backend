import { Module } from '@nestjs/common';
import { SalesmanMessageService } from './salesman-message.service';
import { SalesmanMessageController } from './salesman-message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesmanMessage } from './entities/salesman-message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesmanMessage])],
  controllers: [SalesmanMessageController],
  providers: [SalesmanMessageService],
})
export class SalesmanMessageModule { }
