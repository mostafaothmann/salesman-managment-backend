import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";

export class CreateAssociationDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    lan?: string;

    @IsOptional()
    @IsString()
    lat?: string;

    @IsString()
    @IsOptional()
    admin_description?: string;

    @IsString()
    @IsOptional()
    salesman_description?: string;

    @IsString()
    @IsNotEmpty()
    @Length(10)
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsOptional()
    telephone_number: string;


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

}
