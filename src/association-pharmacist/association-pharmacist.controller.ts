import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AssociationPharmacistService } from './association-pharmacist.service';
import { CreateAssociationPharmacistDto } from './dto/create-association-pharmacist.dto';
import { UpdateAssociationPharmacistDto } from './dto/update-association-pharmacist.dto';

@Controller('association-pharmacist')
export class AssociationPharmacistController {
  constructor(private readonly associationPharmacistService: AssociationPharmacistService) { }

  @Post()
  create(@Body() createAssociationPharmacistDto: CreateAssociationPharmacistDto) {
    return this.associationPharmacistService.create(createAssociationPharmacistDto);
  }

  @Get()
  findAll() {
    return this.associationPharmacistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.associationPharmacistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateAssociationPharmacistDto: UpdateAssociationPharmacistDto) {
    return this.associationPharmacistService.update(+id, updateAssociationPharmacistDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.associationPharmacistService.remove(+id);
  }
}
