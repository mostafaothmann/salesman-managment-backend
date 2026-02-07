import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SampleDoctorService } from './sample-doctor.service';
import { CreateSampleDoctorDto } from './dto/create-sample-doctor.dto';
import { UpdateSampleDoctorDto } from './dto/update-sample-doctor.dto';

@Controller('sample-doctor')
export class SampleDoctorController {
  constructor(private readonly sampleDoctorService: SampleDoctorService) {}

  @Post()
  create(@Body() createSampleDoctorDto: CreateSampleDoctorDto) {
    return this.sampleDoctorService.create(createSampleDoctorDto);
  }

  @Get()
  findAll() {
    return this.sampleDoctorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sampleDoctorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSampleDoctorDto: UpdateSampleDoctorDto) {
    return this.sampleDoctorService.update(+id, updateSampleDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sampleDoctorService.remove(+id);
  }
}
