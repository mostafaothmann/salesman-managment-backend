import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTypeDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsDate()
    @IsNotEmpty()
    manufacturing_date?: Date;

}
