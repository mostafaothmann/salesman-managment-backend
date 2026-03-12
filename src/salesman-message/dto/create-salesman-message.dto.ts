import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSalesmanMessageDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNumber()
    @IsNotEmpty()
    salesman_id: number;

}


export interface FitlerSalesmanMessageProps {
    page: number;
    limit: number;
    filter_salesman_id: number;
    filter_title: string;
}
