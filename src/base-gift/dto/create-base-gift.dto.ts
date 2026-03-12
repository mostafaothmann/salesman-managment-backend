import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBaseGiftDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsNumber()
    @IsOptional()
    quantity: string;
}
