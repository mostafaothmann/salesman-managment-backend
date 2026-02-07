import { PartialType } from '@nestjs/mapped-types';
import { CreateOnlineOfferDto } from './create-online-offer.dto';

export class UpdateOnlineOfferDto extends PartialType(CreateOnlineOfferDto) {}
