import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { VideoLinkService } from './video-link.service';
import { CreateVideoLinkDto } from './dto/create-video-link.dto';
import { UpdateVideoLinkDto } from './dto/update-video-link.dto';

@Controller('video-link')
export class VideoLinkController {
  constructor(private readonly videoLinkService: VideoLinkService) { }

  @Post()
  create(@Body() createVideoLinkDto: CreateVideoLinkDto) {
    return this.videoLinkService.create(createVideoLinkDto);
  }

  @Get()
  findAll() {
    return this.videoLinkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.videoLinkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateVideoLinkDto: UpdateVideoLinkDto) {
    return this.videoLinkService.update(+id, updateVideoLinkDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.videoLinkService.remove(+id);
  }
}
