import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHospitalDoctorDto {


    @IsNumber()
    @IsNotEmpty()
    hospital_id: number;

    @IsNumber()
    @IsNotEmpty()
    doctor_id: number;

}
