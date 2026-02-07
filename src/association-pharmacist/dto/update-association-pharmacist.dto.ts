import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociationPharmacistDto } from './create-association-pharmacist.dto';

export class UpdateAssociationPharmacistDto extends PartialType(CreateAssociationPharmacistDto) {}
