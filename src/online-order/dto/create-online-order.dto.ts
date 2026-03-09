import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateOnlineOrderDto {

    @IsNumber()
    @IsNotEmpty()
    assistant_id: number;

    @IsNumber()
    @IsNotEmpty()
    online_customer_id: number;

    @IsNumber()
    @IsNotEmpty()
    salesman_id: number;

    @IsDate()
    @IsNotEmpty()
    validated_at: Date;

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

}
