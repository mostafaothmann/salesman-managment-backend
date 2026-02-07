import { PartialType } from '@nestjs/mapped-types';
import { CreateAssosiationDto } from './create-assosiation.dto';

export class UpdateAssosiationDto extends PartialType(CreateAssosiationDto) {}
