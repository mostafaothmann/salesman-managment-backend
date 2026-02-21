import { IsString } from "class-validator";

export class CreateGroupTypeDto {

    @IsString()
    name: string;

    @IsString()
    description: string;
    
}
