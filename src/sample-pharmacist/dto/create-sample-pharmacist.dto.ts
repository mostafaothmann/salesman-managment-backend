import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSamplePharmacistDto {

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    pharmacist_visit_id: number;

    @IsNotEmpty()
    @IsNumber()
    type_id: number;


}
