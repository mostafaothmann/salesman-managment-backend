import { IsNotEmpty, IsDecimal, IsEnum, IsString, IsNumber, IsEmail, IsStrongPassword, IsDate, Length, Min, Max } from 'class-validator';
import { ROLE } from 'src/auth/enums/role.enum';
export class CreateAssistantDto {
    @IsNotEmpty()
    @IsString()
    @Length(1, 20)
    first_name: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 20)
    last_name: string;

    @IsNotEmpty()
    @IsEmail()
    @Length(1, 40)
    email: string;

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
    governorate_Id?: number;

    @IsNotEmpty()
    @IsNumber()
    city_Id: number;

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
