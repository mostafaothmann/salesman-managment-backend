import { Module } from '@nestjs/common';
import { DoctorPharmacistService } from './doctor-pharmacist.service';
import { DoctorPharmacistController } from './doctor-pharmacist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorPharmacist } from './entities/doctor-pharmacist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DoctorPharmacist])],
  controllers: [DoctorPharmacistController],
  providers: [DoctorPharmacistService],
})
export class DoctorPharmacistModule {}
