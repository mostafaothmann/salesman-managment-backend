import { Module } from '@nestjs/common';
import { VideoLinkService } from './video-link.service';
import { VideoLinkController } from './video-link.controller';
import { Entity } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoLink } from './entities/video-link.entity';

@Entity()
@Module({
  imports: [TypeOrmModule.forFeature([VideoLink])],
  controllers: [VideoLinkController],
  providers: [VideoLinkService],
})
export class VideoLinkModule { }
