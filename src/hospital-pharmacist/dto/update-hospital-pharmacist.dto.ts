import { PartialType } from '@nestjs/mapped-types';
import { CreateHospitalPharmacistDto } from './create-hospital-pharmacist.dto';

export class UpdateHospitalPharmacistDto extends PartialType(CreateHospitalPharmacistDto) {}
