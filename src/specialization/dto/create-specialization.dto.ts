import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateSpecializationDto {
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

}
