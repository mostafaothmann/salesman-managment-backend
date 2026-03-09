import { Module } from '@nestjs/common';
import { HospitalPharmacistService } from './hospital-pharmacist.service';
import { HospitalPharmacistController } from './hospital-pharmacist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalPharmacist } from './entities/hospital-pharmacist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HospitalPharmacist])],
  controllers: [HospitalPharmacistController],
  providers: [HospitalPharmacistService],
})
export class HospitalPharmacistModule { }
