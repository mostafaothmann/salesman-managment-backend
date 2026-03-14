import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTypeDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    admin_description?: string;

    @IsString()
    @IsOptional()
    salesman_description?: string;

    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsNumber()
    @IsNotEmpty()
    grouptype_id: number;

    @IsNumber()
    @IsNotEmpty()
    percentage: number;

    @IsNumber()
    @IsNotEmpty()
    delivery_percentage: number;
    
    @IsNumber()
    @IsNotEmpty()
    online_percentage: number;

    @IsNumber()
    @IsNotEmpty()
    type: number;

    @IsDate()
    @IsNotEmpty()
    manufacturing_date?: Date;

}
