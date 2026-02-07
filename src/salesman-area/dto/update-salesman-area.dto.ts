import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesmanAreaDto } from './create-salesman-area.dto';

export class UpdateSalesmanAreaDto extends PartialType(CreateSalesmanAreaDto) {}
