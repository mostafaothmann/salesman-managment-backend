import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAssociationDoctorDto {

    @IsNumber()
    @IsNotEmpty()
    association_id: number;

    @IsNumber()
    @IsNotEmpty()
    doctor_id: number;

}
