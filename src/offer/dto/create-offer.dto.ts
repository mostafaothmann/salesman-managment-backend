import { IsBoolean, IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOfferDto {

    @IsNumber()
    @IsNotEmpty()
    base_offer_id: number;

    @IsNumber()
    @IsNotEmpty()
    order_id: number;

    @IsNumber()
    @IsNotEmpty()
    price_for_piece: number;

    @IsNumber()
    @IsNotEmpty()
    base_total_price: number;

    @IsNumber()
    return_total_price: number;

    @IsNumber()
    @IsNotEmpty()
    total_price: number;

    @IsNumber()
    @IsNotEmpty()
    base_quantity: number;

    @IsNumber()
    @IsNotEmpty()
    return_quantity: number;

    @IsNumber()
    @IsNotEmpty()
    total_quantity: number;

    @IsBoolean()
    @IsNotEmpty()
    is_with_gift: boolean;

    @IsBoolean()
    @IsNotEmpty()
    has_return: boolean;

    @IsNumber()
    return_discount: number;

    @IsDate()
    return_date: Date;

}
