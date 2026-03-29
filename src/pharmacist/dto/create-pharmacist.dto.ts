import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { LOYALTY } from "src/auth/enums/loyalty-enums";

export class CreatePharmacistDto {

    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsNumber()
    gender?: number;

    @IsOptional()
    @IsString()
    lan?: string;

    @IsOptional()
    @IsString()
    lat?: string;

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
    governorate_id: number;

    @IsNotEmpty()
    @IsNumber()
    city_id: number;

    @IsNotEmpty()
    @IsNumber()
    area_id: number;

    @IsNotEmpty()
    @IsNumber()
    street_id: number;

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



export interface FilterPharmacistProps {
    page: number;
    limit: number;
    filter_first_name: string;
    filter_last_name: string;
    filter_min_classification: number;
    filter_max_classification: number;
    filter_min_age: number;
    filter_max_age: number;
    filter_specialization_id: number;
    filter_min_loyalty: number;
    filter_max_loyalty: number;
    filter_governorate_id: number;
    filter_city_id: number;
    filter_area_id: number;
    filter_street_id: number;
}
