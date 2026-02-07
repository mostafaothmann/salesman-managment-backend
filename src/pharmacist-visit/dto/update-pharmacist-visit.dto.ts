import { PartialType } from '@nestjs/mapped-types';
import { CreatePharmacistVisitDto } from './create-pharmacist-visit.dto';

export class UpdatePharmacistVisitDto extends PartialType(CreatePharmacistVisitDto) {}
