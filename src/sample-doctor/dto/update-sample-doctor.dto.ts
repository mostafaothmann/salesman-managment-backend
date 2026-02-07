import { PartialType } from '@nestjs/mapped-types';
import { CreateSampleDoctorDto } from './create-sample-doctor.dto';

export class UpdateSampleDoctorDto extends PartialType(CreateSampleDoctorDto) {}
