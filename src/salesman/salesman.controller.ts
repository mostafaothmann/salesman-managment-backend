import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, ParseIntPipe } from '@nestjs/common';
import { SalesmanService } from './salesman.service';
import { CreateSalesmanDto } from './dto/create-salesman.dto';
import { UpdateSalesmanDto } from './dto/update-salesman.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import type { FilterSalesmanProps } from './dto/create-salesman.dto';

@Controller('salesman')
export class SalesmanController {
  constructor(private readonly salesmanService: SalesmanService) { }

  @Post()
  create(@Body() createSalesmanDto: CreateSalesmanDto) {
    return this.salesmanService.create(createSalesmanDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.salesmanService.findAll(page, limit);
  }

  @Get(`/fullname`)
  findName() {
    return this.salesmanService.getNames();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateSalesmanDto: UpdateSalesmanDto) {
    return this.salesmanService.update(+id, updateSalesmanDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.remove(+id);
  }

  @Post('/filter')
  filter(@Body() filters: FilterSalesmanProps) {
    return this.salesmanService.filter(filters);
  }

  //for  Profile Page 

  @Get('/doctor-samples/:id')
  getDoctorSamples(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.getDoctorSamples(+id)
  }

  @Get('/pharmacist-samples/:id')
  getPharmacistSamples(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.getPharmacistSamples(+id)
  }

  @Get('/doctor-visits/:id')
  getDoctorVisits(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.getDoctorVisits(+id)
  }

  @Get('/pharmacist-visits/:id')
  getPharmacistVisits(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.getPharmacistVisits(+id)
  }

  @Get('/doctor-gifts/:id')
  getDoctorGifts(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.getDoctorGifts(+id)
  }

  @Get('/pharmacist-gifts/:id')
  getPharmacistGifts(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.getPharmacistGifts(+id)
  }

  @Get('/orders/:id')
  getOrders(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.getOrders(+id)
  }

  @Get('/areas/:id')
  getAreas(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.getAreas(+id)
  }

  //for Application 

  @Get('/doctors/:id')
  getDoctors(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.getDoctors(+id)
  }

  @Get('/pharmacists/:id')
  getPharmacist(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanService.getDoctors(+id)
  }


}
