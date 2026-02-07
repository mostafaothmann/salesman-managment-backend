import { IsNotEmpty, IsString } from "class-validator";

export class CreateGovernorateDto {

    @IsNotEmpty()
    @IsString()
    name?: string;

}
