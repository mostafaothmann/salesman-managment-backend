import { IsNotEmpty, IsString } from "class-validator";

export class CreateVideoLinkDto {

    @IsString()
    @IsNotEmpty()
    link: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    name: string;

}
