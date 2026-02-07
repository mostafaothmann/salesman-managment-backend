import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAssociationDoctorDto {

    @IsString()
    @IsNotEmpty()
    status: number;

    @IsNumber()
    @IsNotEmpty()
    association_id: number;

    @IsNumber()
    @IsNotEmpty()
    doctor_id: number;

}
