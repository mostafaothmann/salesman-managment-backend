import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDoctorVisitDto {

    @IsNumber()
    @IsNotEmpty()
    doctor_id: number;

    @IsNumber()
    @IsNotEmpty()
    type_id: number;

    @IsNumber()
    @IsNotEmpty()
    salesman_id: number;

    @IsString()
    @IsNotEmpty()
    note: string;

    @IsString()
    @IsNotEmpty()
    number_of_patients: number;

    @IsString()
    @IsNotEmpty()
    photo: string;

    @IsBoolean()
    @IsNotEmpty()
    is_other_spoken_note: boolean;

    @IsString()
    closest_pharmacy: string;

}
