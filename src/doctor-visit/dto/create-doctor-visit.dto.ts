import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateDoctorVisitDto {

    @IsNumber()
    @IsNotEmpty()
    doctor_id: number;

    @IsNumber()
    @IsNotEmpty()
    assistant_id: number;

    @IsNumber()
    @IsNotEmpty()
    type_id: number;

    @IsNumber()
    @IsNotEmpty()
    visit_status_id: number;

    @IsNumber()
    @IsNotEmpty()
    salesman_id: number;

    @IsString()
    @IsNotEmpty()
    lan: string;

    @IsString()
    @IsNotEmpty()
    lat: string;

    @IsString()
    @IsNotEmpty()
    note: string;

    @IsString()
    @IsNotEmpty()
    number_of_patients: number;

    @IsString()
    @IsNotEmpty()
    photo: string;

    @IsBoolean()
    @IsNotEmpty()
    is_other_spoken_note: boolean;

    @IsString()
    closest_pharmacy: string;

}




export interface FilterDoctorVisitProps {
    page: number;
    limit: number;
    filter_visit_status_id: number;
    filter_min_date: string;
    filter_max_date: string;
    filter_type_id: number;
    filter_assistant_id: number;
    filter_doctor_id: number;
    filter_salesman_id: number;
    filter_min_classification: number;
    filter_max_classification: number;
    filter_specialization_id: number;
    filter_governorate_id: number;
    filter_city_id: number;
    filter_area_id: number;
    filter_street_id: number;
}
