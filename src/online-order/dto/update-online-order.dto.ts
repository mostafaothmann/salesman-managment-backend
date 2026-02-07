import { PartialType } from '@nestjs/mapped-types';
import { CreateOnlineOrderDto } from './create-online-order.dto';

export class UpdateOnlineOrderDto extends PartialType(CreateOnlineOrderDto) {}
