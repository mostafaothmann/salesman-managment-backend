import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService,
    private readonly notification: NotificationGateway
  ) { }

  @Post()
  async create(@Body() createTypeDto: CreateTypeDto) {

    const data = await this.typeService.create(createTypeDto);
    if (data) {
      this.notification.sendAdminNotification({ createTypeDto, title: 'تم إضافة صنف' })
    }
    return data;
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
  async update(@Param('id', ParseIntPipe) id: string, @Body() updateTypeDto: UpdateTypeDto) {
    const data = await this.typeService.update(+id, updateTypeDto);
    if (data) {
      this.notification.sendAdminNotification({ updateTypeDto, title: 'تم تعديل صنف' })
    }
    return data;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.remove(+id);
  }

  //for  Profile Page 

  @Get('/doctors-samples/:id')
  getSamplesDoctors(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getDoctorsSamples(+id)
  }

  @Get('/pharmacists-samples/:id')
  getSamplesPharmacists(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getPharmacistsSamples(+id)
  }

  @Get('/base-offers/:id')
  getBaseOffers(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getBaseOffers(+id)
  }

  @Get('/orders/:id')
  getOrders(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getOrders(+id)
  }

  @Get('/recovery-cases/:id')
  getRecoveryCases(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getRecoveryCases(+id)
  }

  @Get('/products/:id')
  getProducts(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getProducts(+id)
  }

  @Get('/offers/:id')
  getOffers(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getOffers(+id)
  }

  @Get('/online-products/:id')
  getOnlineProducts(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getOnlineProducts(+id)
  }

  @Get('/doctors-visits/:id')
  getDoctorsVisits(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getDoctorsVisits(+id)
  }

  @Get('/pharmacists-visits/:id')
  getPharmacistsVisits(@Param('id', ParseIntPipe) id: string) {
    return this.typeService.getPharmacistsVisits(+id)
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
