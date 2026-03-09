import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

export class CreateOnlineProductDto {

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    type_id: number;

    @IsNotEmpty()
    @IsNumber()
    online_order_id: number;

    @IsNotEmpty()
    @IsNumber()
    total_price: number;

}
