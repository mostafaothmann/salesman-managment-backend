import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorVisitDto } from './create-doctor-visit.dto';

export class UpdateDoctorVisitDto extends PartialType(CreateDoctorVisitDto) {}
