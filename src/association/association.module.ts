import { Module } from '@nestjs/common';
import { AssosiationService } from './association.service';
import { AssosiationController } from './association.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './entities/association.entity';
import { NotificationGateway } from 'src/notification/notification.gateway';
import { AssistantService } from 'src/assistant/assistant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Association]), NotificationGateway],
  controllers: [AssosiationController],
  providers: [AssosiationService, NotificationGateway],
})
export class AssociationModule { }
