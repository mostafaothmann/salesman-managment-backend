import { IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";

export class CreateOnlineCustomerDto {

    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsOptional()
    birth_date?: Date;

    @IsString()
    @IsNotEmpty()
    @Length(10)
    phone_nmuber: string;

    @IsString()
    @IsNotEmpty()
    assistant_id: number;

    @IsString()
    @IsNotEmpty()
    salesman_id: number;

    @IsNotEmpty()
    @IsNumber()
    governorate_id?: number;

    @IsNotEmpty()
    @IsNumber()
    city_id?: number;

    @IsNotEmpty()
    @IsNumber()
    area_id?: number;
}
