import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, Max, Min } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    type_id: number;

    @IsNotEmpty()
    @IsNumber()
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
    has_return: boolean;

    @IsNumber()
    @IsOptional()
    return_discount?: number;

    @IsDate()
    @IsOptional()
    return_date?: Date;

}
