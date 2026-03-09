import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociationDto } from './create-assosiation.dto';

export class UpdateAssociationDto extends PartialType(CreateAssociationDto) {}
