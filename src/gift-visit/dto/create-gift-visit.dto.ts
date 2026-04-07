import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateGiftVisitDto {

    @IsNumber()
    @IsNotEmpty()
    quantity?: number;

    @IsNumber()
    @IsNotEmpty()
    base_gift_id: number;

    @IsNumber()
    @IsNotEmpty()
    visit_id: number;

}

export interface FilterGiftVisitProps {
    page: number;
    limit: number;
    filter_base_gift_id: number;
    filter_visit_id: number;
    filter_min_quantity: number;
    filter_max_quantity: number;
}
