import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { LOYALTY } from "src/auth/loyalty-enums";

export class CreatePharmacistDto {

    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsString()
    graduation_university: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    photo?: string;

    @IsOptional()
    @IsEmail()
    graduation_country?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsString()
    phone_number: string;

    @IsOptional()
    @IsString()
    telephone_number?: string;

    @IsOptional()
    @IsString()
    last_visit_note?: string;

    @IsOptional()
    @IsDate()
    birth_date?: Date;

    @IsOptional()
    @IsDate()
    last_visit_date?: Date;

    @IsNotEmpty()
    @IsString()
    favorite_time_opening?: string;

    @IsNotEmpty()
    @IsString()
    favorite_time_closing?: string;

    @IsOptional()
    @IsNumber()
    classification?: number;

    @IsOptional()
    @IsNumber()
    average_patients_per_day?: number;

    @IsEnum(LOYALTY)
    loyalty?: LOYALTY;

    @IsNotEmpty()
    @IsNumber()
    governorate_Id: number;

    @IsNotEmpty()
    @IsNumber()
    city_Id: number;

    @IsNotEmpty()
    @IsNumber()
    area_id: number;

    @IsNotEmpty()
    @IsNumber()
    street_id: number;

    @IsNotEmpty()
    @IsNumber()
    building_id: number;

    @IsString()
    @IsOptional()
    first_work_opening_time: string;

    @IsString()
    @IsOptional()
    first_work_closing_time: string;

    @IsString()
    @IsOptional()
    second_work_opening_time: string;

    @IsString()
    @IsOptional()
    second_work_closing_time: string;
}
