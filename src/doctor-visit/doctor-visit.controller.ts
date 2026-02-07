import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoctorVisitService } from './doctor-visit.service';
import { CreateDoctorVisitDto } from './dto/create-doctor-visit.dto';
import { UpdateDoctorVisitDto } from './dto/update-doctor-visit.dto';

@Controller('doctor-visit')
export class DoctorVisitController {
  constructor(private readonly doctorVisitService: DoctorVisitService) {}

  @Post()
  create(@Body() createDoctorVisitDto: CreateDoctorVisitDto) {
    return this.doctorVisitService.create(createDoctorVisitDto);
  }

  @Get()
  findAll() {
    return this.doctorVisitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorVisitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorVisitDto: UpdateDoctorVisitDto) {
    return this.doctorVisitService.update(+id, updateDoctorVisitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorVisitService.remove(+id);
  }
}
