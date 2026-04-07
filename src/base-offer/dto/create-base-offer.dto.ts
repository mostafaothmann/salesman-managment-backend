import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class CreateBaseOfferDto {

    @IsNumber()
    @IsNotEmpty()
    number_of_gifts: number;

    @IsNumber()
    @IsNotEmpty()
    number_of_pieces: number;

    @IsNumber()
    @IsNotEmpty()
    type_id: number;

    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;

}
