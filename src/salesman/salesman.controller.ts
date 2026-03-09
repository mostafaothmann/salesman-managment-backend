import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { SalesmanService } from './salesman.service';
import { CreateSalesmanDto } from './dto/create-salesman.dto';
import { UpdateSalesmanDto } from './dto/update-salesman.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import type { FilterSalesmanProps } from './dto/create-salesman.dto';

@Controller('salesman')
export class SalesmanController {
  constructor(private readonly salesmanService: SalesmanService) { }

  @Post()
  create(@Body() createSalesmanDto: CreateSalesmanDto) {
    return this.salesmanService.create(createSalesmanDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.salesmanService.findAll(page, limit);
  }
  
  @Get(`/fullname`)
  findName() {
    return this.salesmanService.getNames();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesmanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesmanDto: UpdateSalesmanDto) {
    return this.salesmanService.update(+id, updateSalesmanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesmanService.remove(+id);
  }

  @Post('/filter')
  filter(@Body() filters: FilterSalesmanProps) {
    return this.salesmanService.filter(filters);
  }


}
