import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateCityDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    governorate_Id: number;

    @IsOptional()
    @IsString()
    description?: string;

}
