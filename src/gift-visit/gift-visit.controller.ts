import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GiftVisitService } from './gift-visit.service';
import { CreateGiftVisitDto, type FilterGiftVisitProps } from './dto/create-gift-visit.dto';
import { UpdateGiftVisitDto } from './dto/update-gift-visit.dto';

@Controller('gift-visit')
export class GiftVisitController {
  constructor(private readonly giftVisitService: GiftVisitService) { }

  @Post()
  create(@Body() createGiftVisitDto: CreateGiftVisitDto) {
    return this.giftVisitService.create(createGiftVisitDto);
  }

  @Get('/all')
  getAll() {
    return this.giftVisitService.getAll();
  }

  @Get()
  findAll() {
    return this.giftVisitService.findAll();
  }

  @Get('/doctors')
  getAllDoctors() {
    return this.giftVisitService.findAllDoctors();
  }

  @Get('/pharmacists')
  getAllPharmacists() {
    return this.giftVisitService.findAllPharmacists();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.giftVisitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateGiftVisitDto: UpdateGiftVisitDto) {
    return this.giftVisitService.update(+id, updateGiftVisitDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.giftVisitService.remove(+id);
  }

  @Post('/filter')
  filter(@Body() filters: FilterGiftVisitProps) {
    return this.giftVisitService.filter(filters);
  }
}
