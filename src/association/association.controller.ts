import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AssosiationService } from './association.service';
import { CreateAssociationDto } from './dto/create-assosiation.dto';
import { UpdateAssociationDto } from './dto/update-assosiation.dto';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Controller('association')
export class AssosiationController {
  constructor(private readonly assosiationService: AssosiationService,
    private readonly notification: NotificationGateway
  ) { }

  @Post()
  async create(@Body() createAssosiationDto: CreateAssociationDto) {
    const data = await this.assosiationService.create(createAssosiationDto);
    if (data) {
      this.notification.sendAdminNotification({ createAssosiationDto, title: 'تم إضافة جمعية' })
    }
    return data;
  }

  @Get()
  findAll() {
    return this.assosiationService.findAll();
  }

  @Get(`/names`)
  getNames() {
    return this.assosiationService.getNames();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.assosiationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateAssosiationDto: UpdateAssociationDto) {
    return this.assosiationService.update(+id, updateAssosiationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.assosiationService.remove(+id);
  }


}
