import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) { }

  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typeService.create(createTypeDto);
  }

  @Get(`/names`)
  getNames() {
    return this.typeService.getNames();
  }

  @Get()
  findAll() {
    return this.typeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.typeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typeService.update(+id, updateTypeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.remove(+id);
  }

  @Get('/samples-doctors/:id')
  getSamplesDoctors(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getSamplesDoctors(+id)
  }

  @Get('/samples-pharmacists/:id')
  getSamplesPharmacists(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getSamplesPharmacists(+id)
  }

  @Get('/base-offers/:id')
  getBaseOffers(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getBaseOffers(+id)
  }

  @Get('/recovery-cases/:id')
  getRecoveryCases(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getRecoveryCases(+id)
  }

  @Get('/products/:id')
  getProducts(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getProducts(+id)
  }

  @Get('/online-products/:id')
  getOnlineProducts(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getOnlineProducts(+id)
  }

  @Get('/doctors-visits/:id')
  getDoctorsVisits(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getVisitsDoctors(+id)
  }

  @Get('/pharmacists-visits/:id')
  getPharmacistsVisits(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getVisitsPharmacists(+id)
  }

  @Get('/ingredients/:id')
  getIngredients(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getIngredients(+id)
  }

  @Get('/specializations/:id')
  getSpecializations(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getSpecializations(+id)
  }


}
