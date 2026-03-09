import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateOnlineOfferDto {

    @IsNumber()
    @IsNotEmpty()
    base_offer_id: number;

    @IsNumber()
    @IsNotEmpty()
    order_id: number;

    @IsNumber()
    @IsNotEmpty()
    total_price: number;

    @IsNumber()
    @IsNotEmpty()
    total_quantity: number;
    
}
