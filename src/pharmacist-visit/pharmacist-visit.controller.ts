import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PharmacistVisitService } from './pharmacist-visit.service';
import { CreatePharmacistVisitDto } from './dto/create-pharmacist-visit.dto';
import { UpdatePharmacistVisitDto } from './dto/update-pharmacist-visit.dto';
import { DataSource } from 'typeorm';

@Controller('pharmacist-visit')
export class PharmacistVisitController {
  constructor(private readonly pharmacistVisitService: PharmacistVisitService
  ) { }

  @Get(`/show`)
  show() {
    return this.pharmacistVisitService.show();
  }

  @Post()
  create(@Body() createPharmacistVisitDto: CreatePharmacistVisitDto) {
    return this.pharmacistVisitService.create(createPharmacistVisitDto);
  }

  @Get()
  findAll() {
    return this.pharmacistVisitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.pharmacistVisitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updatePharmacistVisitDto: UpdatePharmacistVisitDto) {
    return this.pharmacistVisitService.update(+id, updatePharmacistVisitDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.pharmacistVisitService.remove(+id);
  }
}
