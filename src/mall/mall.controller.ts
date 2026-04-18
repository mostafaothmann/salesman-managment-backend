import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MallService } from './mall.service';
import { CreateMallDto } from './dto/create-mall.dto';
import { UpdateMallDto } from './dto/update-mall.dto';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Controller('mall')
export class MallController {
  constructor(private readonly mallService: MallService,
    private readonly notification: NotificationGateway
  ) { }

  @Post()
  async create(@Body() createMallDto: CreateMallDto) {
    const data = await this.mallService.create(createMallDto);
    if (data) {
      this.notification.sendAdminNotification({ createMallDto, title: 'تم إضافة مركز تجاري' })
    }
    return data;
  }

  @Get()
  findAll() {
    return this.mallService.findAll();
  }

  @Get(`/names`)
  getNames() {
    return this.mallService.getNames();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.mallService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateMallDto: UpdateMallDto) {
    return this.mallService.update(+id, updateMallDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.mallService.remove(+id);
  }
}
