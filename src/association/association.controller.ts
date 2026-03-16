import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AssosiationService } from './association.service';
import { CreateAssociationDto } from './dto/create-assosiation.dto';
import { UpdateAssociationDto } from './dto/update-assosiation.dto';

@Controller('association')
export class AssosiationController {
  constructor(private readonly assosiationService: AssosiationService) { }

  @Post()
  create(@Body() createAssosiationDto: CreateAssociationDto) {
    return this.assosiationService.create(createAssosiationDto);
  }

  @Get()
  findAll() {
    return this.assosiationService.findAll();
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
