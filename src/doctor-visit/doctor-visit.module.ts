import { Module } from '@nestjs/common';
import { DoctorVisitService } from './doctor-visit.service';
import { DoctorVisitController } from './doctor-visit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorVisit } from './entities/doctor-visit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorVisit])],
  controllers: [DoctorVisitController],
  providers: [DoctorVisitService],
  exports: [DoctorVisitService]
})
export class DoctorVisitModule { }
