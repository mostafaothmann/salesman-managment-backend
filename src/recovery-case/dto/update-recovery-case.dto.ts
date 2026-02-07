import { PartialType } from '@nestjs/mapped-types';
import { CreateRecoveryCaseDto } from './create-recovery-case.dto';

export class UpdateRecoveryCaseDto extends PartialType(CreateRecoveryCaseDto) {}
