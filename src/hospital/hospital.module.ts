import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { Hospital } from './entities/hospital.entity';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Hospital]),NotificationGateway],
  controllers: [HospitalController],
  providers: [HospitalService,NotificationGateway],
})
export class HospitalModule { }
