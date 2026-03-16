import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SampleService } from './sample.service';
import { CreateSampleDto, type FilterSampleProps } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';

@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) { }

  @Post()
  create(@Body() createSampleDto: CreateSampleDto) {
    return this.sampleService.create(createSampleDto);
  }

  @Get('/all')
  getAll() {
    return this.sampleService.getAll();
  }

  @Get('/doctors')
  getAllDoctors() {
    return this.sampleService.findAllDoctors();
  }

  @Get('/pharmacists')
  getAllPharmacists() {
    return this.sampleService.findAllPharmacists();
  }

  @Get('')
  findAll() {
    return this.sampleService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
    return this.sampleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateSampleDto: UpdateSampleDto) {
    return this.sampleService.update(+id, updateSampleDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.sampleService.remove(+id);
  }

  @Post('/filter')
  filter(@Body() filters: FilterSampleProps) {
    return this.sampleService.filter(filters);
  }
}
