import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSampleDoctorDto {

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    doctor_visit_id: number;

    @IsNotEmpty()
    @IsNumber()
    type_id: number;

}
