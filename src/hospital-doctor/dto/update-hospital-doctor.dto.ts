import { PartialType } from '@nestjs/mapped-types';
import { CreateHospitalDoctorDto } from './create-hospital-doctor.dto';

export class UpdateHospitalDoctorDto extends PartialType(CreateHospitalDoctorDto) {}
