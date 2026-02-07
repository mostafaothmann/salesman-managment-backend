import { Module } from '@nestjs/common';
import { SamplePharmacistService } from './sample-pharmacist.service';
import { SamplePharmacistController } from './sample-pharmacist.controller';

@Module({
  controllers: [SamplePharmacistController],
  providers: [SamplePharmacistService],
})
export class SamplePharmacistModule {}
