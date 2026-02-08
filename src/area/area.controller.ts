import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles/roles/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { ROLE } from 'src/auth/enums/role.enum';

// @UseGuards(AuthGuard, RolesGuard)
// @Roles(ROLE.ADMIN)
@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) { }

  @Post()
  create(@Body() createAreaDto: CreateAreaDto) {
    return this.areaService.create(createAreaDto);
  }

  @Get()
  findAll() {
    return this.areaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.areaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAreaDto: UpdateAreaDto) {
    return this.areaService.update(+id, updateAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.areaService.remove(+id);
  }
}
