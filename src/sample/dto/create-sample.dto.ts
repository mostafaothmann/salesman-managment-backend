import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSampleDto {

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    visit_id: number;

    @IsNotEmpty()
    @IsNumber()
    type_id: number;

}

export interface FilterSampleProps {
    page: number;
    limit: number;
    filter_type_id: number;
    filter_min_quantity: number;
    filter_max_quantity: number;
}
