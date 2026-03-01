import { IsBoolean, IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Max, Min } from "class-validator";
import { LOYALTY } from "src/auth/enums/loyalty-enums";

export class CreateDoctorDto {

    @IsNotEmpty()
    @IsString()
    first_name?: string;

    @IsNotEmpty()
    @IsString()
    last_name?: string;


    @IsNotEmpty()
    @IsBoolean()
    is_added_by_assistant?: boolean;

    @IsNotEmpty()
    @IsString()
    graduation_university?: string;

    @IsNotEmpty()
    @IsString()
    wife_husband_first_name?: string;

    @IsNotEmpty()
    @IsString()
    wife_husband_last_name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsNotEmpty()
    @IsString()
    photo?: string;

    @IsOptional()
    @IsEmail()
    graduation_country?: string;

    @IsNotEmpty()
    @IsEmail()
    description?: string;

    @IsOptional()
    @IsString()
    first_work_time_opening?: string;

    @IsOptional()
    @IsString()
    first_work_time_closing?: string;

    @IsOptional()
    @IsString()
    second_work_time_opening?: string;

    @IsOptional()
    @IsString()
    second_work_time_closing?: string;

    @IsNotEmpty()
    @IsString()
    phone_number?: string;

    @IsNotEmpty()
    @IsString()
    telephone_number?: string;

    @IsOptional()
    @IsString()
    last_visit_note?: string;

    @IsOptional()
    @IsDate()
    birth_date?: Date;

    @IsNotEmpty()
    @IsDate()
    last_visit_date?: Date;

    @IsOptional()
    @IsString()
    admin_description?: string;

    @IsOptional()
    @IsString()
    salesman_description?: string;

    @IsOptional()
    @IsString()
    lan?: string;

    @IsOptional()
    @IsString()
    lat?: string;

    @IsOptional()
    @IsString()
    favourite_time_closing?: string;

    @IsOptional()
    @IsString()
    favourite_time_opening?: string;

    @IsOptional()
    @IsNumber()
    classification?: number;

    @IsNotEmpty()
    @IsNumber()
    specialization_id?: number;

    @IsOptional()
    @IsNumber()
    average_patients_per_day?: number;

    @IsOptional()
    @IsNumber()
    loyalty?: number;

    @IsNotEmpty()
    @IsNumber()
    governorate_Id?: number;

    @IsNotEmpty()
    @IsNumber()
    city_Id?: number;

    @IsNotEmpty()
    @IsNumber()
    area_id?: number;

    @IsNotEmpty()
    @IsNumber()
    sex?: number;

    @IsNotEmpty()
    @IsNumber()
    street_id?: number;

    /*    @IsNotEmpty()
       @IsNumber()
       building_id?: number; */

}


export interface FilterDoctorProps {
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
