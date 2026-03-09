import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePharmacistVisitDto {

    @IsNumber()
    @IsNotEmpty()
    pharmacist_id: number;

    @IsNumber()
    @IsNotEmpty()
    type_id: number;

    @IsNumber()
    @IsNotEmpty()
    visit_status_id: number;

    @IsDate()
    @IsNotEmpty()
    validated_at: Date;

    @IsNumber()
    @IsNotEmpty()
    salesman_id: number;

    @IsNumber()
    @IsNotEmpty()
    number_of_patients: number;

    @IsString()
    @IsOptional()
    note?: string;

    @IsString()
    @IsOptional()
    photo?: string;

}
