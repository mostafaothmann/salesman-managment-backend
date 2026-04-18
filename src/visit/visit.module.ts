import { Module } from '@nestjs/common';
import { VisitService } from './visit.service';
import { VisitController } from './visit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visit } from './entities/visit.entity';
import { DoctorService } from 'src/doctor/doctor.service';
import { PharmacistVisitService } from 'src/pharmacist-visit/pharmacist-visit.service';
import { DoctorVisitService } from 'src/doctor-visit/doctor-visit.service';
import { DoctorVisit } from 'src/doctor-visit/entities/doctor-visit.entity';
import { PharmacistVisit } from 'src/pharmacist-visit/entities/pharmacist-visit.entity';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([Visit, DoctorVisit, PharmacistVisit]),
  ], controllers: [VisitController],
  providers: [VisitService, DoctorVisitService, PharmacistVisitService,NotificationGateway],
})
export class VisitModule { }
