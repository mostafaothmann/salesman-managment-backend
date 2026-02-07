import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecoveryCaseImageService } from './recovery-case-image.service';
import { CreateRecoveryCaseImageDto } from './dto/create-recovery-case-image.dto';
import { UpdateRecoveryCaseImageDto } from './dto/update-recovery-case-image.dto';

@Controller('recovery-case-image')
export class RecoveryCaseImageController {
  constructor(private readonly recoveryCaseImageService: RecoveryCaseImageService) {}

  @Post()
  create(@Body() createRecoveryCaseImageDto: CreateRecoveryCaseImageDto) {
    return this.recoveryCaseImageService.create(createRecoveryCaseImageDto);
  }

  @Get()
  findAll() {
    return this.recoveryCaseImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recoveryCaseImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecoveryCaseImageDto: UpdateRecoveryCaseImageDto) {
    return this.recoveryCaseImageService.update(+id, updateRecoveryCaseImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recoveryCaseImageService.remove(+id);
  }
}
