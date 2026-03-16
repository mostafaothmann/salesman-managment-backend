import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SpecializationService } from './specialization.service';
import { CreateSpecializationDto } from './dto/create-specialization.dto';
import { UpdateSpecializationDto } from './dto/update-specialization.dto';

@Controller('specialization')
export class SpecializationController {
  constructor(private readonly specializationService: SpecializationService) { }

  @Post()
  create(@Body() createSpecializationDto: CreateSpecializationDto) {
    return this.specializationService.create(createSpecializationDto);
  }

  @Get()
  findAll() {
    return this.specializationService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
    return this.specializationService.findOne(+id);
  }
  //get types for each specialization byt id 
  @Get('/with-types/:id')
  findTypesForOne(@Param('id', ParseIntPipe) id: string) {
    return this.specializationService.findTypesForOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateSpecializationDto: UpdateSpecializationDto) {
    return this.specializationService.update(+id, updateSpecializationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.specializationService.remove(+id);
  }

}


