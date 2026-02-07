import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRecoveryCaseImageDto {

    @IsNotEmpty()
    @IsString()
    description?: string;

    @IsNotEmpty()
    @IsNumber()
    recovery_case_id: number;

    @IsOptional()
    @IsString()
    photo?: string;

}
