import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";

export class CreateAssosiationDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsNotEmpty()
    @Length(10)
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsOptional()
    telephone_number: string;

}
