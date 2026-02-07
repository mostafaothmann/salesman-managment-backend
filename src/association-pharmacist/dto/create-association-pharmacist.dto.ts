import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAssociationPharmacistDto {
    
    @IsString()
    @IsNotEmpty()
    status: number;

    @IsNumber()
    @IsNotEmpty()
    association_id: number;

    @IsNumber()
    @IsNotEmpty()
    pharmacist_id: number;

}
