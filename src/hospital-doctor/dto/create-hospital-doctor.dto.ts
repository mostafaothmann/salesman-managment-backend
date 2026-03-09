import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHospitalDoctorDto {
    @IsString()
    @IsNotEmpty()
    status: string;

    @IsNumber()
    @IsNotEmpty()
    hospital_id: number;

    @IsNumber()
    @IsNotEmpty()
    doctor_id: number;

}
