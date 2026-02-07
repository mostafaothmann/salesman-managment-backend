import { PartialType } from '@nestjs/mapped-types';
import { CreateOnlineProductDto } from './create-online-product.dto';

export class UpdateOnlineProductDto extends PartialType(CreateOnlineProductDto) {}
