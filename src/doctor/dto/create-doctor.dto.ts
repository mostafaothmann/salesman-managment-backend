import { IsString, IsNumber, IsOptional, IsBoolean, IsDateString } from "class-validator";

export class CreateDoctorDto {

    @IsString()
    first_name: string;

    @IsOptional()
    @IsString()
    second_name: string;

    @IsString()
    last_name: string;

    @IsOptional()
    @IsString()
    lat: string;

    @IsOptional()
    @IsString()
    lan: string;

    @IsOptional()
    @IsDateString()
    birth_date: string;

    @IsString()
    phone_number: string;

    @IsOptional()
    @IsString()
    telephone_number: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsBoolean()
    is_added_by_admin: boolean;

    @IsOptional()
    @IsString()
    graduation_country: string;

    @IsOptional()
    @IsString()
    graduation_university: string;

    @IsOptional()
    @IsNumber()
    loyalty_id: number;

    @IsOptional()
    @IsNumber()
    classification_id: number;

    @IsOptional()
    @IsString()
    salesman_description: string;

    @IsOptional()
    @IsString()
    admin_description: string;

    @IsOptional()
    @IsString()
    favourite_time_opening: string;

    @IsOptional()
    @IsString()
    favourite_time_closing: string;

    @IsString()
    first_work_time_opening: string;

    @IsString()
    first_work_time_closing: string;

    @IsString()
    second_work_time_opening: string;

    @IsOptional()
    @IsString()
    second_work_time_closing: string;

    @IsOptional()
    @IsDateString()
    last_visit_date: string;

    @IsOptional()
    @IsString()
    last_visit_note: string;

    @IsNumber()
    governorate_id: number;

    @IsNumber()
    city_id: number;

    @IsNumber()
    area_id: number;

    @IsNumber()
    street_id: number;

    @IsNumber()
    specialization_id: number;

    @IsNumber()
    gender: number;

    @IsOptional()
    @IsNumber()
    average_patients_per_day: number;

    @IsOptional()
    @IsNumber()
    expected_recipes: number;

    @IsOptional()
    @IsString()
    adopted_types: string;

    @IsOptional()
    @IsString()
    preffered_dietary_types: string;

    @IsOptional()
    @IsString()
    preffered_treatment_types: string;

    @IsOptional()
    @IsString()
    preffered_companies: string;

    @IsOptional()
    @IsString()
    competitive_types: string;

    @IsOptional()
    @IsString()
    stance_on_dietary_supp: string;

    @IsOptional()
    @IsString()
    personality_strengthens: string;

    @IsOptional()
    @IsString()
    interestes: string;

    @IsOptional()
    @IsNumber()
    personality_type_id: number;

    @IsOptional()
    @IsNumber()
    social_pattern_id: number;

    @IsOptional()
    @IsNumber()
    salesman_relationship_id: number;

    @IsOptional()
    @IsString()
    secrtary_first_name: string;

    @IsOptional()
    @IsString()
    full_place: string;

    @IsOptional()
    @IsString()
    close_place: string;

    @IsOptional()
    @IsNumber()
    waiting_time_id: number;
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
