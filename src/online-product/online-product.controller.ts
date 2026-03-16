import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OnlineProductService } from './online-product.service';
import { CreateOnlineProductDto } from './dto/create-online-product.dto';
import { UpdateOnlineProductDto } from './dto/update-online-product.dto';

@Controller('online-product')
export class OnlineProductController {
  constructor(private readonly onlineProductService: OnlineProductService) {}

  @Post()
  create(@Body() createOnlineProductDto: CreateOnlineProductDto) {
    return this.onlineProductService.create(createOnlineProductDto);
  }

  @Get()
  findAll() {
    return this.onlineProductService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
    return this.onlineProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateOnlineProductDto: UpdateOnlineProductDto) {
    return this.onlineProductService.update(+id, updateOnlineProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.onlineProductService.remove(+id);
  }
}
