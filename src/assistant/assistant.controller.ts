import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AssistantService } from './assistant.service';
import { CreateAssistantDto } from './dto/create-assistant.dto';
import { UpdateAssistantDto } from './dto/update-assistant.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles/roles/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorators';
import { ROLE } from 'src/auth/enums/role.enum';

@Controller('assistant')
export class AssistantController {
  constructor(private readonly assistantService: AssistantService) { }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.ADMIN)
  @Post()
  create(@Body() createAssistantDto: CreateAssistantDto) {
    return this.assistantService.create(createAssistantDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.ADMIN)
  @Get()
  findAll() {
    return this.assistantService.findAll();
  }


  @Get(`/fullname`)
  getNames() {
    return this.assistantService.getNames();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.assistantService.findOne(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.ADMIN)
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateAssistantDto: UpdateAssistantDto) {
    return this.assistantService.update(+id, updateAssistantDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.assistantService.remove(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.ADMIN)
  @Get('/doctor-visits/:id')
  getDoctorVisits(@Param('id', ParseIntPipe) id: string) {
    return this.assistantService.getDoctorVisits(+id)
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.ADMIN)
  @Get('/pharmacist-visits/:id')
  getPharmacistVisits(@Param('id', ParseIntPipe) id: string) {
    return this.assistantService.getPharmacistVisits(+id)
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(ROLE.ADMIN)
  @Get('/orders/:id')
  getOrders(@Param('id', ParseIntPipe) id: string) {
    return this.assistantService.getOrders(+id)
  }

}
