import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDoctorPharmacistDto {

    @IsNumber()
    @IsNotEmpty()
    doctor_id: number;

    @IsNumber()
    @IsNotEmpty()
    pharmacist_id: number;

}
