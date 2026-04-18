import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService,
    private readonly notification: NotificationGateway

  ) { }

  @Post()
  async create(@Body() createHospitalDto: CreateHospitalDto) {
    const data = await this.hospitalService.create(createHospitalDto);
    if (data) {
      this.notification.sendAdminNotification({ createHospitalDto, title: 'تم إضافة مركز طبي' })
    }
    return data;
  }

  @Get()
  findAll() {
    return this.hospitalService.findAll();
  }

  @Get(`/names`)
  getNames() {
    return this.hospitalService.getNames();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.hospitalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateHospitalDto: UpdateHospitalDto) {
    return this.hospitalService.update(+id, updateHospitalDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.hospitalService.remove(+id);
  }
}
