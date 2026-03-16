import { IsBoolean, IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderDto {

    @IsNumber()
    note: string;

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
    base_total_price: number;

    @IsNumber()
    return_total_price: number;

    @IsNumber()
    total_price: number;

    @IsNumber()
    base_total_quantity: number;

    @IsNumber()
    total_return_quantity: number;

    @IsNumber()
    total_quantity: number;

    @IsBoolean()
    @IsNotEmpty()
    is_there_return: boolean;

    @IsDate()
    return_date: Date;

    @IsNumber()
    base_total_percentage: number;

    @IsNumber()
    total_return_percentage: number;

    @IsNumber()
    total_percentage: number;

    @IsNumber()
    total_delivery_percentage: number;

    @IsNumber()
    order_status: number;
}



export interface FilterOrderProps {
    page: number;
    limit: number;
    filter_min_quantity: number;
    filter_max_quantity: number;
    filter_min_total_price: number;
    filter_max_total_price: number;
    filter_assistant_id: number,
    filter_salesman_id: number,
    filter_pharmacist_id: number,
    filter_order_status: number
}

