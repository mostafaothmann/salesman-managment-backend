import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoLinkDto } from './create-video-link.dto';

export class UpdateVideoLinkDto extends PartialType(CreateVideoLinkDto) {}
