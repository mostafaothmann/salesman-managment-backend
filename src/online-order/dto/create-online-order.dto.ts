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

}
