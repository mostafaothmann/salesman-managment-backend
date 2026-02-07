import { PartialType } from '@nestjs/mapped-types';
import { CreateAssociationDoctorDto } from './create-association-doctor.dto';

export class UpdateAssociationDoctorDto extends PartialType(CreateAssociationDoctorDto) {}
