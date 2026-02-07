import { Module } from '@nestjs/common';
import { AssosiationService } from './association.service';
import { AssosiationController } from './association.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './entities/association.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Association])],
  controllers: [AssosiationController],
  providers: [AssosiationService],
})
export class AssociationModule { }
