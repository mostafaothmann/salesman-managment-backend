import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AssistantService } from './assistant.service';
import { CreateAssistantDto } from './dto/create-assistant.dto';
import { UpdateAssistantDto } from './dto/update-assistant.dto';

@Controller('assistant')
export class AssistantController {
  constructor(private readonly assistantService: AssistantService) { }

  @Post()
  create(@Body() createAssistantDto: CreateAssistantDto) {
    return this.assistantService.create(createAssistantDto);
  }

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

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateAssistantDto: UpdateAssistantDto) {
    return this.assistantService.update(+id, updateAssistantDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.assistantService.remove(+id);
  }

  @Get('/doctor-visits/:id')
  getDoctorVisits(@Param('id', ParseIntPipe) id: string) {
    return this.assistantService.getDoctorVisits(+id)
  }

  @Get('/pharmacist-visits/:id')
  getPharmacistVisits(@Param('id', ParseIntPipe) id: string) {
    return this.assistantService.getPharmacistVisits(+id)
  }

  @Get('/orders/:id')
  getOrders(@Param('id', ParseIntPipe) id: string) {
    return this.assistantService.getOrders(+id)
  }

}
