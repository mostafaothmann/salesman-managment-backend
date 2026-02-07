import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateTypeIngredientDto {

    @IsNumber()
    @IsNotEmpty()
    type_id: number;

    @IsNumber()
    @IsNotEmpty()
    ingredient_id: number;

    @IsNumber()
    @IsOptional()
    quantity_percentage?: number;

}
