import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import type { FilterDoctorProps } from './dto/create-doctor.dto';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService,
    private readonly notification: NotificationGateway

  ) { }

  @Post()
  async create(@Body() createDoctorDto: CreateDoctorDto) {
    const data = await this.doctorService.create(createDoctorDto);
    if (data) {
      this.notification.sendAdminNotification({ createDoctorDto, title: 'تم إضافة  طبيب' })
    } return data;
  }

  @Get('/show')
  show() {
    return this.doctorService.show();
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.doctorService.findAll(page, limit);
  }

  @Get('/fullname')
  getNames() {
    return this.doctorService.getNames();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.doctorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorService.update(+id, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.doctorService.remove(+id);
  }

  @Post('/filter')
  filter(@Body() filters: FilterDoctorProps) {
    return this.doctorService.filter(filters);
  }

  //for  Profile Page 

  @Get('/samples/:id')
  getSamples(@Param('id', ParseIntPipe) id: string) {
    return this.doctorService.getSamples(+id)
  }

  @Get('/visits/:id')
  getVisits(@Param('id', ParseIntPipe) id: string) {
    return this.doctorService.getVisits(+id)
  }

  @Get('/associations/:id')
  getAssociations(@Param('id', ParseIntPipe) id: string) {
    return this.doctorService.getAssociations(+id)
  }

  @Get('/hospitals/:id')
  getHospitals(@Param('id', ParseIntPipe) id: string) {
    return this.doctorService.getHospitals(+id)
  }

  @Get('/pharmacists/:id')
  getPharmacists(@Param('id', ParseIntPipe) id: string) {
    return this.doctorService.getPharmacists(+id)
  }

  @Get('/gifts/:id')
  getGfits(@Param('id', ParseIntPipe) id: string) {
    return this.doctorService.getGifts(+id)
  }

}
