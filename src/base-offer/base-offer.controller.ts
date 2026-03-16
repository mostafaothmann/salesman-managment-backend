import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BaseOfferService } from './base-offer.service';
import { CreateBaseOfferDto } from './dto/create-base-offer.dto';
import { UpdateBaseOfferDto } from './dto/update-base-offer.dto';

@Controller('base-offer')
export class BaseOfferController {
  constructor(private readonly baseOfferService: BaseOfferService) {}

  @Post()
  create(@Body() createBaseOfferDto: CreateBaseOfferDto) {
    return this.baseOfferService.create(createBaseOfferDto);
  }

  @Get()
  findAll() {
    return this.baseOfferService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
    return this.baseOfferService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateBaseOfferDto: UpdateBaseOfferDto) {
    return this.baseOfferService.update(+id, updateBaseOfferDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.baseOfferService.remove(+id);
  }
}
