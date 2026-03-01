import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateHospitalDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsOptional()
    @IsString()
    phone_number?: string;

    @IsOptional()
    @IsString()
    telephone_number?: string;

    @IsNotEmpty()
    @IsNumber()
    governorate_id: number;

    @IsNotEmpty()
    @IsNumber()
    city_id?: number;

    @IsNotEmpty()
    @IsNumber()
    area_id?: number;

    @IsOptional()
    @IsNumber()
    street_id?: number;

    @IsOptional()
    @IsString()
    salesman_description?: string;

    @IsOptional()
    @IsString()
    admin_description?: string;

}
