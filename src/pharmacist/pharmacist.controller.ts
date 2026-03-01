import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PharmacistService } from './pharmacist.service';
import { CreatePharmacistDto } from './dto/create-pharmacist.dto';
import { UpdatePharmacistDto } from './dto/update-pharmacist.dto';
import type { FilterPharmacistProps } from './dto/create-pharmacist.dto';

@Controller('pharmacist')
export class PharmacistController {
  constructor(private readonly pharmacistService: PharmacistService) { }

  @Post()
  create(@Body() createPharmacistDto: CreatePharmacistDto) {
    return this.pharmacistService.create(createPharmacistDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.pharmacistService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pharmacistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePharmacistDto: UpdatePharmacistDto) {
    return this.pharmacistService.update(+id, updatePharmacistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pharmacistService.remove(+id);
  }

  @Post('/filter')
  filter(@Body() filters: FilterPharmacistProps) {
    return this.pharmacistService.filter(filters);
  }

}
