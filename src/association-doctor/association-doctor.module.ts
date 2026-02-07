import { Module } from '@nestjs/common';
import { AssociationDoctorService } from './association-doctor.service';
import { AssociationDoctorController } from './association-doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociationDoctor } from './entities/association-doctor.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AssociationDoctor])],
  controllers: [AssociationDoctorController],
  providers: [AssociationDoctorService],
})
export class AssociationDoctorModule {}
