import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles/roles/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { ROLE } from 'src/auth/enums/role.enum';

/* @UseGuards(AuthGuard, RolesGuard)
@Roles(ROLE.ADMIN) */
@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) { }

  @Post()
  create(@Body() createAreaDto: CreateAreaDto) {
    return this.areaService.create(createAreaDto);
  }

  @Get()
  findAll() {
    return this.areaService.findAll();
  }

  @Get(`/names`)
  getNames() {
    return this.areaService.getNames();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areaService.update(+id, updateAreaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.remove(+id);
  }

  //for Profile Page

  @Get('/doctors-visits/:id')
  getDoctorVisits(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getDoctorVisits(+id)
  }

  @Get('/pharmacists-visits/:id')
  getPharmacistVisits(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getPharmacistVisits(+id)
  }

  @Get('/doctors/:id')
  getDoctors(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getDoctors(+id)
  }

  @Get('/pharmacists/:id')
  getPharmacists(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getPharmacists(+id)
  }

  @Get('/doctors-samples/:id')
  getDoctorsSamples(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getDoctorsSamples(+id)
  }

  @Get('/pharmacists-samples/:id')
  getPharmacistsSamples(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getPharmacistsSamples(+id)
  }

  @Get('/doctors-gifts/:id')
  getDoctorsGifts(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getDoctorsGifts(+id)
  }

  @Get('/pharmacists-gifts/:id')
  getPharmacistsGifts(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getPharmacistsGifts(+id)
  }

  @Get('/orders/:id')
  getOrders(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getOrders(+id)
  }

  @Get('/streets/:id')
  getStreets(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getStreets(+id)
  }

  @Get('/hospitals/:id')
  getHospitals(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getHospitals(+id)
  }

  @Get('/malls/:id')
  getMalls(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getMalls(+id)
  }

  @Get('/associations/:id')
  getAssociations(@Param('id', ParseIntPipe) id: string) {
    return this.areaService.getAssociations(+id)
  }

}
