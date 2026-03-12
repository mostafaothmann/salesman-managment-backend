import { PartialType } from '@nestjs/mapped-types';
import { CreateGiftVisitDto } from './create-gift-visit.dto';

export class UpdateGiftVisitDto extends PartialType(CreateGiftVisitDto) {}
