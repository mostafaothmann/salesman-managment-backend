import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { PharmacistService } from './pharmacist.service';
import { CreatePharmacistDto } from './dto/create-pharmacist.dto';
import { UpdatePharmacistDto } from './dto/update-pharmacist.dto';
import type { FilterPharmacistProps } from './dto/create-pharmacist.dto';

@Controller('pharmacist')
export class PharmacistController {
  constructor(private readonly pharmacistService: PharmacistService) { }


  @Get(`/show`)
  show() {
    return this.pharmacistService.show();
  }

  @Post()
  create(@Body() createPharmacistDto: CreatePharmacistDto) {
    return this.pharmacistService.create(createPharmacistDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.pharmacistService.findAll(page, limit);
  }

  @Get(`/fullname`)
  getNames() {
    return this.pharmacistService.getNames();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.pharmacistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updatePharmacistDto: UpdatePharmacistDto) {
    return this.pharmacistService.update(+id, updatePharmacistDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.pharmacistService.remove(+id);
  }

  @Post('/filter')
  filter(@Body() filters: FilterPharmacistProps) {
    return this.pharmacistService.filter(filters);
  }

  //for  Profile Page 

  @Get('/samples/:id')
  getSamples(@Param('id', ParseIntPipe) id: string) {
    return this.pharmacistService.getSamples(+id)
  }

  @Get('/visits/:id')
  getVisits(@Param('id', ParseIntPipe) id: string) {
    return this.pharmacistService.getVisits(+id)
  }

  @Get('/gifts/:id')
  getGfits(@Param('id', ParseIntPipe) id: string) {
    return this.pharmacistService.getGifts(+id)
  }

  @Get('/orders/:id')
  getOrders(@Param('id', ParseIntPipe) id: string) {
    return this.pharmacistService.getOrders(+id)
  }

}
