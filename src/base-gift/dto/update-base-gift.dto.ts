import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseGiftDto } from './create-base-gift.dto';

export class UpdateBaseGiftDto extends PartialType(CreateBaseGiftDto) {}
