import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePharmacistVisitDto {

    @IsNumber()
    @IsNotEmpty()
    pharmacist_id: number;

}


export interface FilterPharmacistVisitProps {
    page: number;
    limit: number;
    filter_visit_status_id: number;
    filter_min_date: string;
    filter_max_date: string;
    filter_type_id: number;
    filter_assistant_id: number;
    filter_pharmacist_id: number;
    filter_salesman_id: number;
    filter_min_classification: number;
    filter_max_classification: number;
    filter_specialization_id: number;
    filter_governorate_id: number;
    filter_city_id: number;
    filter_area_id: number;
    filter_street_id: number;
}
