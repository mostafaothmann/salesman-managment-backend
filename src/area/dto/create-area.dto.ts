import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, IsStrongPassword, Max, Min } from "class-validator";

export class CreateAreaDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsNumber()
    city_id: number;

}
