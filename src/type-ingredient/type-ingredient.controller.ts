import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TypeIngredientService } from './type-ingredient.service';
import { CreateTypeIngredientDto } from './dto/create-type-ingredient.dto';
import { UpdateTypeIngredientDto } from './dto/update-type-ingredient.dto';

@Controller('type-ingredient')
export class TypeIngredientController {
  constructor(private readonly typeIngredientService: TypeIngredientService) {}

  @Post()
  create(@Body() createTypeIngredientDto: CreateTypeIngredientDto) {
    return this.typeIngredientService.create(createTypeIngredientDto);
  }

  @Get()
  findAll() {
    return this.typeIngredientService.findAll();
  }

  @Get(':id')
    findOne(@Param('id', ParseIntPipe)  id: string) {
    return this.typeIngredientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateTypeIngredientDto: UpdateTypeIngredientDto) {
    return this.typeIngredientService.update(+id, updateTypeIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.typeIngredientService.remove(+id);
  }
}
