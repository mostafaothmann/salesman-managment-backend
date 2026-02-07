import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseOfferDto } from './create-base-offer.dto';

export class UpdateBaseOfferDto extends PartialType(CreateBaseOfferDto) {}
