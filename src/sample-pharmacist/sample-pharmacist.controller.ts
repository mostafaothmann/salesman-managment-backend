import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SamplePharmacistService } from './sample-pharmacist.service';
import { CreateSamplePharmacistDto } from './dto/create-sample-pharmacist.dto';
import { UpdateSamplePharmacistDto } from './dto/update-sample-pharmacist.dto';

@Controller('sample-pharmacist')
export class SamplePharmacistController {
  constructor(private readonly samplePharmacistService: SamplePharmacistService) {}

  @Post()
  create(@Body() createSamplePharmacistDto: CreateSamplePharmacistDto) {
    return this.samplePharmacistService.create(createSamplePharmacistDto);
  }

  @Get()
  findAll() {
    return this.samplePharmacistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.samplePharmacistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSamplePharmacistDto: UpdateSamplePharmacistDto) {
    return this.samplePharmacistService.update(+id, updateSamplePharmacistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.samplePharmacistService.remove(+id);
  }
}
