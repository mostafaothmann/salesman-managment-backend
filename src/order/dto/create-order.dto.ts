import { IsBoolean, IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDto {

    @IsNumber()
    assistant_id?: number;

    @IsNumber()
    @IsNotEmpty()
    pharmacist_id?: number;

    @IsNumber()
    @IsNotEmpty()
    salesman_id?: number;

    @IsDate()
    @IsNotEmpty()
    validated_at?: Date;

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
    is_return: boolean;

    @IsBoolean()
    @IsNotEmpty()
    is_there_return: boolean;

    @IsDate()
    return_date: Date;

}
