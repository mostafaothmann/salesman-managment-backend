import { Module } from '@nestjs/common';
import { GovernorateService } from './governorate.service';
import { GovernorateController } from './governorate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Governorate } from './entities/governorate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Governorate])], 
  controllers: [GovernorateController],
  providers: [GovernorateService],
})
export class GovernorateModule { }
