import { PartialType } from '@nestjs/mapped-types';
import { CreateOnlineCustomerDto } from './create-online-customer.dto';

export class UpdateOnlineCustomerDto extends PartialType(CreateOnlineCustomerDto) {}
