import { Module } from '@nestjs/common';
import { SampleDoctorService } from './sample-doctor.service';
import { SampleDoctorController } from './sample-doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SampleDoctor } from './entities/sample-doctor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SampleDoctor])],
  controllers: [SampleDoctorController],
  providers: [SampleDoctorService],
})
export class SampleDoctorModule {}
