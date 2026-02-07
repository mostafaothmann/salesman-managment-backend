import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssociationDoctorService } from './association-doctor.service';
import { CreateAssociationDoctorDto } from './dto/create-association-doctor.dto';
import { UpdateAssociationDoctorDto } from './dto/update-association-doctor.dto';

@Controller('association-doctor')
export class AssociationDoctorController {
  constructor(private readonly associationDoctorService: AssociationDoctorService) {}

  @Post()
  create(@Body() createAssociationDoctorDto: CreateAssociationDoctorDto) {
    return this.associationDoctorService.create(createAssociationDoctorDto);
  }

  @Get()
  findAll() {
    return this.associationDoctorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.associationDoctorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssociationDoctorDto: UpdateAssociationDoctorDto) {
    return this.associationDoctorService.update(+id, updateAssociationDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.associationDoctorService.remove(+id);
  }
}
