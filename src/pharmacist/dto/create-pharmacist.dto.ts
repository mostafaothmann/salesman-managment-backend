import {
    IsEmail,
    IsNumber,
    IsOptional,
    IsString,
    IsBoolean,
} from "class-validator";

export class CreatePharmacistDto {

    // ========================
    // Personal Info
    // ========================
    @IsString()
    first_name: string;

    @IsString()
    second_name: string;

    @IsString()
    last_name: string;

    @IsNumber()
    classification_id: number;

    @IsNumber()
    loyalty_id: number;

    @IsString()
    birth_date: string;

    @IsOptional()
    @IsString()
    admin_description?: string;

    @IsOptional()
    @IsString()
    salesman_description?: string;

    @IsString()
    graduation_country: string;

    @IsString()
    graduation_university: string;

    @IsString()
    phone_number: string;

    @IsOptional()
    @IsString()
    telephone_number?: string;

    @IsNumber()
    gender_id: number;

    @IsEmail()
    email: string;

    // ========================
    // Place Info
    // ========================
    @IsOptional()
    @IsString()
    lan?: string;

    @IsOptional()
    @IsString()
    lat?: string;

    @IsNumber()
    governorate_id: number;

    @IsNumber()
    city_id: number;

    @IsNumber()
    area_id: number;

    @IsNumber()
    street_id: number;

    @IsString()
    full_place: string;

    @IsOptional()
    @IsString()
    close_place?: string;

    // ========================
    // Administrative Info
    // ========================
    @IsNumber()
    average_patients_per_day: number;

    @IsBoolean()
    is_added_by_admin: boolean;

    // ========================
    // Work Time Info
    // ========================
    @IsString()
    favourite_time_opening: string;

    @IsString()
    favourite_time_closing: string;

    @IsString()
    first_work_time_opening: string;

    @IsString()
    first_work_time_closing: string;

    @IsString()
    second_work_time_opening: string;

    @IsString()
    second_work_time_closing: string;

    @IsString()
    waiting_time: string;

    // ========================
    // Medical Info
    // ========================
    @IsOptional()
    @IsString()
    stance_on_dietary_supp?: string;

    @IsOptional()
    @IsString()
    adopted_types?: string;

    @IsOptional()
    @IsString()
    preffered_dietary_types?: string;

    @IsOptional()
    @IsString()
    preffered_treatment_types?: string;

    @IsOptional()
    @IsString()
    preffered_companies?: string;

    @IsString()
    competitive_types: string;

    // ========================
    // Personality Info
    // ========================
    @IsOptional()
    @IsString()
    personality_strengthens?: string;

    @IsOptional()
    @IsString()
    interestes?: string;

    @IsNumber()
    personality_type: string;

    @IsNumber()
    social_pattern: string;

    @IsNumber()
    salesman_relationship: string;

    // ========================
    // Pharmacy Info
    // ========================
    @IsOptional()
    @IsString()
    pharmacy_description?: string;

    @IsNumber()
    pharmacy_name: string;

    @IsOptional()
    @IsString()
    assistant_full_name?: string;

    // ========================
    // Company Relation
    // ========================
    @IsOptional()
    @IsString()
    execute_prescription?: string;

    @IsOptional()
    @IsString()
    doctor_relationship?: string;

    @IsOptional()
    @IsString()
    average_sell_for_our_products?: string;

    @IsOptional()
    @IsString()
    our_products_existance_percentage?: string;
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
