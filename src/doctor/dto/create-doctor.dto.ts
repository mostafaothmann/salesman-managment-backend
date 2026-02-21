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

    @IsNotEmpty()
    @IsString()
    favorite_time_opening?: string;

    @IsNotEmpty()
    @IsString()
    favorite_time_closing?: string;

    @IsOptional()
    @IsNumber()
    classification?: number;

    @IsNotEmpty()
    @IsNumber()
    specialization_id?: number;

    @IsOptional()
    @IsNumber()
    average_patients_per_day?: number;

    @IsEnum(LOYALTY)
    loyalty?: LOYALTY;

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
    street_id?: number;

    @IsNotEmpty()
    @IsNumber()
    building_id?: number;

}
