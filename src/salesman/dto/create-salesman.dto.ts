import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsStrongPassword, Length, Max, Min } from "class-validator";
import { ROLE } from "src/auth/enums/role.enum";

export class CreateSalesmanDto {

    @IsNotEmpty()
    @IsString()
    @Length(1, 20)
    first_name: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 20)
    last_name: string;

    @IsOptional()
    @IsString()
    lan?: string;

    @IsOptional()
    @IsString()
    lat?: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    admin_description: string;

    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 10,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    phone_number: string;

    @IsNotEmpty()
    @IsString()
    telephone_number: string;

    @IsNotEmpty()
    @IsDate()
    birth_date: string;

    @IsNotEmpty()
    @IsNumber()
    governorate_id: number;

    @IsNotEmpty()
    @IsNumber()
    account_status_id: number;

    @IsNotEmpty()
    @IsNumber()
    account_type_id: number;

    @IsNotEmpty()
    @IsNumber()
    gender: number;

    @IsNotEmpty()
    @IsNumber()
    level: number;

    @IsNotEmpty()
    @IsNumber()
    team_profit: number;

    @IsNotEmpty()
    @IsNumber()
    total_profit: number;

    @IsNotEmpty()
    @IsNumber()
    sales_profit: number;

    @IsNotEmpty()
    @IsNumber()
    leader_id: number;

    @IsNotEmpty()
    @IsNumber()
    city_id: number;

    @IsNotEmpty()
    @IsNumber()
    area_id: number;

    @IsNotEmpty()
    @IsNumber()
    street_id: number;

    @IsNotEmpty()
    @IsNumber()
    building_id: number;

    @IsEnum(ROLE)
    role: ROLE;

}

export interface FilterSalesmanProps {
    page: number;
    limit: number;
    filter_first_name: string;
    filter_last_name: string;
    filter_governorate_id: number;
    filter_city_id: number;
    filter_area_id: number;
    filter_street_id: number;
    filter_account_status_id: number;
    filter_account_type_id: number;
    filter_min_time: number;
    filter_max_time: number;

}