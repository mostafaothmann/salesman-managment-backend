import { Module } from '@nestjs/common';
import { PharmacistService } from './pharmacist.service';
import { PharmacistController } from './pharmacist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pharmacist } from './entities/pharmacist.entity';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Pharmacist]), NotificationGateway],
  controllers: [PharmacistController],
  providers: [PharmacistService, NotificationGateway],
})
export class PharmacistModule { }
