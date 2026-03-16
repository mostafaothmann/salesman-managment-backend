import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DoctorPharmacistService } from './doctor-pharmacist.service';
import { CreateDoctorPharmacistDto } from './dto/create-doctor-pharmacist.dto';
import { UpdateDoctorPharmacistDto } from './dto/update-doctor-pharmacist.dto';

@Controller('doctor-pharmacist')
export class DoctorPharmacistController {
  constructor(private readonly doctorPharmacistService: DoctorPharmacistService) {}

  @Post()
  create(@Body() createDoctorPharmacistDto: CreateDoctorPharmacistDto) {
    return this.doctorPharmacistService.create(createDoctorPharmacistDto);
  }

  @Get()
  findAll() {
    return this.doctorPharmacistService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
    return this.doctorPharmacistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateDoctorPharmacistDto: UpdateDoctorPharmacistDto) {
    return this.doctorPharmacistService.update(+id, updateDoctorPharmacistDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.doctorPharmacistService.remove(+id);
  }
}
