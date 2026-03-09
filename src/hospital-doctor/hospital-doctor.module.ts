import { Module } from '@nestjs/common';
import { HospitalDoctorService } from './hospital-doctor.service';
import { HospitalDoctorController } from './hospital-doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalDoctor } from './entities/hospital-doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HospitalDoctor])],
  controllers: [HospitalDoctorController],
  providers: [HospitalDoctorService],
})
export class HospitalDoctorModule { }
