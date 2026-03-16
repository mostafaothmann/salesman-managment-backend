import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { HospitalDoctorService } from './hospital-doctor.service';
import { CreateHospitalDoctorDto } from './dto/create-hospital-doctor.dto';
import { UpdateHospitalDoctorDto } from './dto/update-hospital-doctor.dto';

@Controller('hospital-doctor')
export class HospitalDoctorController {
  constructor(private readonly hospitalDoctorService: HospitalDoctorService) {}

  @Post()
  create(@Body() createHospitalDoctorDto: CreateHospitalDoctorDto) {
    return this.hospitalDoctorService.create(createHospitalDoctorDto);
  }

  @Get()
  findAll() {
    return this.hospitalDoctorService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
    return this.hospitalDoctorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateHospitalDoctorDto: UpdateHospitalDoctorDto) {
    return this.hospitalDoctorService.update(+id, updateHospitalDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.hospitalDoctorService.remove(+id);
  }
}
