import { Module } from '@nestjs/common';
import { GiftVisitService } from './gift-visit.service';
import { GiftVisitController } from './gift-visit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftVisit } from './entities/gift-visit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GiftVisit])],
  controllers: [GiftVisitController],
  providers: [GiftVisitService],
})
export class GiftVisitModule { }
