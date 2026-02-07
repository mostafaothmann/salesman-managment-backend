import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OnlineCustomerService } from './online-customer.service';
import { CreateOnlineCustomerDto } from './dto/create-online-customer.dto';
import { UpdateOnlineCustomerDto } from './dto/update-online-customer.dto';

@Controller('online-customer')
export class OnlineCustomerController {
  constructor(private readonly onlineCustomerService: OnlineCustomerService) {}

  @Post()
  create(@Body() createOnlineCustomerDto: CreateOnlineCustomerDto) {
    return this.onlineCustomerService.create(createOnlineCustomerDto);
  }

  @Get()
  findAll() {
    return this.onlineCustomerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.onlineCustomerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOnlineCustomerDto: UpdateOnlineCustomerDto) {
    return this.onlineCustomerService.update(+id, updateOnlineCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onlineCustomerService.remove(+id);
  }
}
