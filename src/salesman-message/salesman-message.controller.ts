import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { SalesmanMessageService } from './salesman-message.service';
import { CreateSalesmanMessageDto, type FitlerSalesmanMessageProps } from './dto/create-salesman-message.dto';
import { UpdateSalesmanMessageDto } from './dto/update-salesman-message.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles/roles/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { ROLE } from 'src/auth/enums/role.enum';

@UseGuards(AuthGuard, RolesGuard)
@Roles(ROLE.ADMIN)
@Controller('salesman-message')
export class SalesmanMessageController {
  constructor(private readonly salesmanMessageService: SalesmanMessageService) { }

  @Post()
  create(@Body() createSalesmanMessageDto: CreateSalesmanMessageDto) {
    return this.salesmanMessageService.create(createSalesmanMessageDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.salesmanMessageService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanMessageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateSalesmanMessageDto: UpdateSalesmanMessageDto) {
    return this.salesmanMessageService.update(+id, updateSalesmanMessageDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.salesmanMessageService.remove(+id);
  }

  @Post('/filter')
  filter(@Body() filters: FitlerSalesmanMessageProps) {
    return this.salesmanMessageService.filter(filters);
  }
}
