import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor]),NotificationGateway],
  controllers: [DoctorController],
  providers: [DoctorService,NotificationGateway],
})
export class DoctorModule { }
