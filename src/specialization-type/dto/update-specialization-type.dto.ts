import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecializationTypeDto } from './create-specialization-type.dto';

export class UpdateSpecializationTypeDto extends PartialType(CreateSpecializationTypeDto) {}
