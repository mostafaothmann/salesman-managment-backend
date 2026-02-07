import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorPharmacistDto } from './create-doctor-pharmacist.dto';

export class UpdateDoctorPharmacistDto extends PartialType(CreateDoctorPharmacistDto) {}
