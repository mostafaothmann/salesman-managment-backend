import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OnlineOrderService } from './online-order.service';
import { CreateOnlineOrderDto } from './dto/create-online-order.dto';
import { UpdateOnlineOrderDto } from './dto/update-online-order.dto';

@Controller('online-order')
export class OnlineOrderController {
  constructor(private readonly onlineOrderService: OnlineOrderService) {}

  @Post()
  create(@Body() createOnlineOrderDto: CreateOnlineOrderDto) {
    return this.onlineOrderService.create(createOnlineOrderDto);
  }

  @Get()
  findAll() {
    return this.onlineOrderService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
    return this.onlineOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateOnlineOrderDto: UpdateOnlineOrderDto) {
    return this.onlineOrderService.update(+id, updateOnlineOrderDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.onlineOrderService.remove(+id);
  }
}
