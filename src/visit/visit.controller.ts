import { FilterPharmacistProps } from './../pharmacist/dto/create-pharmacist.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitService } from './visit.service';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { PharmacistVisitService } from 'src/pharmacist-visit/pharmacist-visit.service';
import { DoctorVisitService } from 'src/doctor-visit/doctor-visit.service';
import { type FilterDoctorVisitProps } from 'src/doctor-visit/dto/create-doctor-visit.dto';
import { type FilterPharmacistVisitProps } from 'src/pharmacist-visit/dto/create-pharmacist-visit.dto';


@Controller('visit')
export class VisitController {
  constructor(private readonly visitService: VisitService,
    private readonly pharmacistVisitService: PharmacistVisitService,
    private readonly doctorVisitService: DoctorVisitService,
  ) { }

  @Post()
  async create(@Body() dto: CreateVisitDto) {
    if (dto.typeC === 'doctor') {
      return this.doctorVisitService.create({
        ...dto,
        doctor_id: dto.doctor_id,
      });
    } else if (dto.typeC === 'pharmacist') {
      return this.pharmacistVisitService.create({
        ...dto,
        pharmacist_id: dto.pharmacist_id,
      });
    } else {
      throw new Error('Invalid visit type');
    }
  }


  @Get('/doctors')
  async findAllDoctors() {
    return this.visitService.findAllDoctors();
  }

  @Get('/pharmacists')
  async findAllPharmacists() {
    return this.visitService.findAllPharmacists();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisitDto: UpdateVisitDto) {
    return this.visitService.update(+id, updateVisitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitService.remove(+id);
  }
  @Post('/doctors/filter')
  filterDoctors(@Body() filters: FilterDoctorVisitProps) {
    return this.visitService.filterDoctors(filters);
  }

  @Post('')
  filterPharmacists(@Body() filters: FilterPharmacistVisitProps) {
    return this.visitService.filterPharmacists(filters);
  }
}
