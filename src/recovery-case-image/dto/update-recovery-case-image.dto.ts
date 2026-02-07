import { PartialType } from '@nestjs/mapped-types';
import { CreateRecoveryCaseImageDto } from './create-recovery-case-image.dto';

export class UpdateRecoveryCaseImageDto extends PartialType(CreateRecoveryCaseImageDto) {}
