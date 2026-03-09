import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHospitalPharmacistDto {
    @IsString()
    @IsNotEmpty()
    status: string;

    @IsNumber()
    @IsNotEmpty()
    hospital_id: number;

    @IsNumber()
    @IsNotEmpty()
    pharmacist_id: number;
}
