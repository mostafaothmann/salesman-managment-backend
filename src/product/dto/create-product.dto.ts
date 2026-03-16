import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, Max, Min } from "class-validator";

export class CreateProductDto {


    @IsNotEmpty()
    @IsNumber()
    type_id: number;

    @IsNotEmpty()
    @IsNumber()
    delivery_percentage_for_piece: number;

    @IsNotEmpty()
    @IsNumber()
    percentage_for_piece: number;

    @IsNumber()
    total_percentage?: number;

    @IsNumber()
    base_percentage?: number;

    @IsNumber()
    return_percentage?: number;

    @IsNumber()
    total_delivery_percentage?: number

    @IsNotEmpty()
    @IsNumber()
    order_id: number;

    @IsNumber()
    @IsNotEmpty()
    price_for_piece: number;

    @IsNumber()
    base_total_price?: number;

    @IsNumber()
    return_total_price?: number;

    @IsNumber()
    total_price?: number;

    @IsNumber()
    @IsNotEmpty()
    base_quantity?: number;

    @IsNumber()
    return_quantity?: number;

    @IsNumber()
    total_quantity?: number;

    @IsBoolean()
    has_return?: boolean;

    @IsNumber()
    @IsNotEmpty()
    return_discount: number;

}


export interface FilterProductProps {
    page: number;
    limit: number;
    filter_type_id: number;
    filter_min_quantity: number;
    filter_max_quantity: number;
    filter_min_total_price: number;
    filter_max_total_price: number;
}
