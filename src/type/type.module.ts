import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './entities/type.entity';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Type]), NotificationGateway],
  controllers: [TypeController],
  providers: [TypeService, NotificationGateway],
  exports: [TypeService]
})
export class TypeModule { }
