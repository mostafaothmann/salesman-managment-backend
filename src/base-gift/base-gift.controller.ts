import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseGiftService } from './base-gift.service';
import { CreateBaseGiftDto } from './dto/create-base-gift.dto';
import { UpdateBaseGiftDto } from './dto/update-base-gift.dto';

@Controller('base-gift')
export class BaseGiftController {
  constructor(private readonly baseGiftService: BaseGiftService) { }

  @Post()
  create(@Body() createBaseGiftDto: CreateBaseGiftDto) {
    return this.baseGiftService.create(createBaseGiftDto);
  }

  @Get(``)
  findAll() {
    return this.baseGiftService.findAll();
  }

  @Get(`/names`)
  getNames() {
    return this.baseGiftService.getNames();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseGiftService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaseGiftDto: UpdateBaseGiftDto) {
    return this.baseGiftService.update(+id, updateBaseGiftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseGiftService.remove(+id);
  }
}
