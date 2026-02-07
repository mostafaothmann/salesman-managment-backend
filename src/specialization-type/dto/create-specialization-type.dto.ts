import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSpecializationTypeDto {

    @IsString()
    @IsOptional()
    status?: string;

    @IsNumber()
    @IsNotEmpty()
    specialization_id: number;

    @IsNumber()
    @IsNotEmpty()
    type_id: number;

}
