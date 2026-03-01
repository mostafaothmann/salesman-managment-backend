import { IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateIngredientDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    admin_description?: string;

    @IsString()
    @IsOptional()
    salesman_description?: string;

    @IsOptional()
    @IsDecimal()
    quantity?: string;

}
