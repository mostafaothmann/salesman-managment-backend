import { Module } from '@nestjs/common';
import { MallService } from './mall.service';
import { MallController } from './mall.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mall } from './entities/mall.entity';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Mall]), NotificationGateway],
  controllers: [MallController],
  providers: [MallService, NotificationGateway],
})
export class MallModule { }
