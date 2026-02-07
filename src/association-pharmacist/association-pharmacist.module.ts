import { Module } from '@nestjs/common';
import { AssociationPharmacistService } from './association-pharmacist.service';
import { AssociationPharmacistController } from './association-pharmacist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssociationPharmacist } from './entities/association-pharmacist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssociationPharmacist])],
  controllers: [AssociationPharmacistController],
  providers: [AssociationPharmacistService],
})
export class AssociationPharmacistModule { }
