import { Module } from '@nestjs/common';
import { PharmacistVisitService } from './pharmacist-visit.service';
import { PharmacistVisitController } from './pharmacist-visit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmacistVisit } from './entities/pharmacist-visit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PharmacistVisit])],
  controllers: [PharmacistVisitController],
  providers: [PharmacistVisitService],
  exports: [PharmacistVisitService]
})
export class PharmacistVisitModule { }
