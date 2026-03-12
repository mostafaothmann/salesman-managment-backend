import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesmanMessageDto } from './create-salesman-message.dto';

export class UpdateSalesmanMessageDto extends PartialType(CreateSalesmanMessageDto) {}
