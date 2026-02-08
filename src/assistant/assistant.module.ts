import { Module } from '@nestjs/common';
import { AssistantService } from './assistant.service';
import { AssistantController } from './assistant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assistant } from './entities/assistant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assistant])],
  controllers: [AssistantController],
  providers: [AssistantService],
  exports: [AssistantService]

})
export class AssistantModule { }
