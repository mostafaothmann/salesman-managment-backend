import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RecoveryCaseService } from './recovery-case.service';
import { CreateRecoveryCaseDto } from './dto/create-recovery-case.dto';
import { UpdateRecoveryCaseDto } from './dto/update-recovery-case.dto';

@Controller('recovery-case')
export class RecoveryCaseController {
  constructor(private readonly recoveryCaseService: RecoveryCaseService) {}

  @Post()
  create(@Body() createRecoveryCaseDto: CreateRecoveryCaseDto) {
    return this.recoveryCaseService.create(createRecoveryCaseDto);
  }

  @Get()
  findAll() {
    return this.recoveryCaseService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
    return this.recoveryCaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateRecoveryCaseDto: UpdateRecoveryCaseDto) {
    return this.recoveryCaseService.update(+id, updateRecoveryCaseDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.recoveryCaseService.remove(+id);
  }
}
