import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MallService } from './mall.service';
import { CreateMallDto } from './dto/create-mall.dto';
import { UpdateMallDto } from './dto/update-mall.dto';

@Controller('mall')
export class MallController {
  constructor(private readonly mallService: MallService) {}

  @Post()
  create(@Body() createMallDto: CreateMallDto) {
    return this.mallService.create(createMallDto);
  }

  @Get()
  findAll() {
    return this.mallService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
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
