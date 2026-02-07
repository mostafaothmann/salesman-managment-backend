import { Module } from '@nestjs/common';
import { SalesmanAreaService } from './salesman-area.service';
import { SalesmanAreaController } from './salesman-area.controller';
import { SalesmanArea } from './entities/salesman-area.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SalesmanArea])],
  controllers: [SalesmanAreaController],
  providers: [SalesmanAreaService],
})
export class SalesmanAreaModule { }
