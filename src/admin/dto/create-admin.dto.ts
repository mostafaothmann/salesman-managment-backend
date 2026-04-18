import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsStrongPassword, Length } from "class-validator";
import { ROLE } from "src/auth/enums/role.enum";

export class CreateAdminDto {

    @IsNotEmpty()
    @IsEmail()
    username: string;

    @IsNotEmpty()
    @IsEmail()
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

    @IsEnum(ROLE)
    role: ROLE.ADMIN;
}

