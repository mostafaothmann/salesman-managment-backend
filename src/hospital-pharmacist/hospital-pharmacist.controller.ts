import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HospitalPharmacistService } from './hospital-pharmacist.service';
import { CreateHospitalPharmacistDto } from './dto/create-hospital-pharmacist.dto';
import { UpdateHospitalPharmacistDto } from './dto/update-hospital-pharmacist.dto';

@Controller('hospital-pharmacist')
export class HospitalPharmacistController {
  constructor(private readonly hospitalPharmacistService: HospitalPharmacistService) {}

  @Post()
  create(@Body() createHospitalPharmacistDto: CreateHospitalPharmacistDto) {
    return this.hospitalPharmacistService.create(createHospitalPharmacistDto);
  }

  @Get()
  findAll() {
    return this.hospitalPharmacistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospitalPharmacistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHospitalPharmacistDto: UpdateHospitalPharmacistDto) {
    return this.hospitalPharmacistService.update(+id, updateHospitalPharmacistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospitalPharmacistService.remove(+id);
  }
}
