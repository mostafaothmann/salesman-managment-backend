import { IsBoolean, IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOfferDto {

    @IsNumber()
    @IsNotEmpty()
    base_offer_id: number;

    @IsNumber()
    @IsNotEmpty()
    order_id: number;

    @IsNumber()
    price_for_piece: number;

    @IsNumber()
    base_total_price: number;

    @IsNumber()
    return_total_price: number;

    @IsNotEmpty()
    total_percentage: number;

    @IsNotEmpty()
    base_percentage: number;

    @IsNotEmpty()
    return_percentage: number;

    @IsNotEmpty()
    total_delivery_percentage: number

    @IsNumber()
    total_price: number;

    @IsNumber()
    base_quantity: number;

    @IsNumber()
    @IsNotEmpty()
    return_quantity: number;

    @IsNumber()
    total_quantity: number;

    @IsBoolean()
    @IsNotEmpty()
    is_with_gift: boolean;

    @IsBoolean()
    has_return: boolean;

    @IsNumber()
    return_discount: number;

    @IsNumber()
    delivery_percentage_for_piece: number;

    @IsNumber()
    percentage_for_piece: number;
}


export interface FilterOfferProps {
    page: number;
    limit: number;
    filter_base_offer_id: number;
    filter_min_quantity: number;
    filter_max_quantity: number;
    filter_min_total_price: number;
    filter_max_total_price: number;
}
