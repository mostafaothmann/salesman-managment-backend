import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRecoveryCaseDto {

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDate()
    start_treatment: Date;

    @IsNotEmpty()
    @IsDate()
    end_treatment: Date;

    @IsNumber()
    @IsNotEmpty()
    type_id: number;

}
