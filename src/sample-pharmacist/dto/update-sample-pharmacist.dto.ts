import { PartialType } from '@nestjs/mapped-types';
import { CreateSamplePharmacistDto } from './create-sample-pharmacist.dto';

export class UpdateSamplePharmacistDto extends PartialType(CreateSamplePharmacistDto) {}
