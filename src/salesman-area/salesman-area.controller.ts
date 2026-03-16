import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SalesmanAreaService } from './salesman-area.service';
import { CreateSalesmanAreaDto } from './dto/create-salesman-area.dto';
import { UpdateSalesmanAreaDto } from './dto/update-salesman-area.dto';

@Controller('salesman-area')
export class SalesmanAreaController {
  constructor(private readonly salesmanAreaService: SalesmanAreaService) {}

  @Post()
  create(@Body() createSalesmanAreaDto: CreateSalesmanAreaDto) {
    return this.salesmanAreaService.create(createSalesmanAreaDto);
  }

  @Get()
  findAll() {
    return this.salesmanAreaService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
    return this.salesmanAreaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateSalesmanAreaDto: UpdateSalesmanAreaDto) {
    return this.salesmanAreaService.update(+id, updateSalesmanAreaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanAreaService.remove(+id);
  }
}
