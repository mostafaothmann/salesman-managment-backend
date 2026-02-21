import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupTypeService } from './group-type.service';
import { CreateGroupTypeDto } from './dto/create-group-type.dto';
import { UpdateGroupTypeDto } from './dto/update-group-type.dto';

@Controller('group-type')
export class GroupTypeController {
  constructor(private readonly groupTypeService: GroupTypeService) {}

  @Post()
  create(@Body() createGroupTypeDto: CreateGroupTypeDto) {
    return this.groupTypeService.create(createGroupTypeDto);
  }

  @Get()
  findAll() {
    return this.groupTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupTypeDto: UpdateGroupTypeDto) {
    return this.groupTypeService.update(+id, updateGroupTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupTypeService.remove(+id);
  }
}
