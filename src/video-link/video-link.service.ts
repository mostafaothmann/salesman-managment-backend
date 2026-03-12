import { Injectable } from '@nestjs/common';
import { CreateVideoLinkDto } from './dto/create-video-link.dto';
import { UpdateVideoLinkDto } from './dto/update-video-link.dto';
import { VideoLink } from './entities/video-link.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VideoLinkService {
  constructor(
    @InjectRepository(VideoLink)
    private readonly videoLinkRepo: Repository<VideoLink>,
  ) { }

  create(videoLinkDto: CreateVideoLinkDto): Promise<VideoLink> {
    const videoLink = this.videoLinkRepo.create(videoLinkDto);
    return this.videoLinkRepo.save(videoLink);
  }

  findAll(): Promise<VideoLink[]> {
    return this.videoLinkRepo.find()
  }

  findOne(id: number): Promise<VideoLink | null> {
    return this.videoLinkRepo.findOneBy({ id });
  }

  async update(id: number, updateVideoLinkDto: UpdateVideoLinkDto): Promise<VideoLink | null> {
    await this.videoLinkRepo.update(id, updateVideoLinkDto);
    return this.videoLinkRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.videoLinkRepo.delete(id);
  }

}
