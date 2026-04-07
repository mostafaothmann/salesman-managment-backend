import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) { }

  @Post()
  create(@Body() createHospitalDto: CreateHospitalDto) {
    return this.hospitalService.create(createHospitalDto);
  }

  @Get()
  findAll() {
    return this.hospitalService.findAll();
  }

  @Get(`/names`)
  getNames() {
    return this.hospitalService.getNames();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.hospitalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateHospitalDto: UpdateHospitalDto) {
    return this.hospitalService.update(+id, updateHospitalDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.hospitalService.remove(+id);
  }
}
