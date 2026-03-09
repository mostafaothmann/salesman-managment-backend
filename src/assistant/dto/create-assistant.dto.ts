import { IsNotEmpty, IsDecimal, IsEnum, IsString, IsNumber, IsEmail, IsStrongPassword, IsDate, Length, Min, Max, IsOptional } from 'class-validator';
import { ROLE } from 'src/auth/enums/role.enum';
export class CreateAssistantDto {

    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsOptional()
    @IsString()
    lan?: string;

    @IsOptional()
    @IsString()
    lat?: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 20)
    last_name: string;

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
    governorate_id?: number;

    @IsNotEmpty()
    @IsNumber()
    city_id: number;

    
    @IsNotEmpty()
    @IsNumber()
    sex: number;

    @IsNotEmpty()
    @IsNumber()
    account_status_id: number;

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
    role: ROLE.ASSISTANT

}
