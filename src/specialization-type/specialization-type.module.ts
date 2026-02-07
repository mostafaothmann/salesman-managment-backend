import { Module } from '@nestjs/common';
import { SpecializationTypeService } from './specialization-type.service';
import { SpecializationTypeController } from './specialization-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecializationType } from './entities/specialization-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpecializationType])],
  controllers: [SpecializationTypeController],
  providers: [SpecializationTypeService],
})
export class SpecializationTypeModule { }
