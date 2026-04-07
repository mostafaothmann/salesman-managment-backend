import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsStrongPassword, Length, Max, Min } from "class-validator";

export class CreateSalesmanAreaDto {

    @IsNotEmpty()
    @IsNumber()
    salesman_Id: number;

    @IsNotEmpty()
    @IsNumber()
    area_id: number;

    @IsNumber()
    @IsOptional()
    note: string;

}
