import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecializationTypeService } from './specialization-type.service';
import { CreateSpecializationTypeDto } from './dto/create-specialization-type.dto';
import { UpdateSpecializationTypeDto } from './dto/update-specialization-type.dto';

@Controller('specialization-type')
export class SpecializationTypeController {
  constructor(private readonly specializationTypeService: SpecializationTypeService) {}

  @Post()
  create(@Body() createSpecializationTypeDto: CreateSpecializationTypeDto) {
    return this.specializationTypeService.create(createSpecializationTypeDto);
  }

  @Get()
  findAll() {
    return this.specializationTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specializationTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpecializationTypeDto: UpdateSpecializationTypeDto) {
    return this.specializationTypeService.update(+id, updateSpecializationTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specializationTypeService.remove(+id);
  }
}
