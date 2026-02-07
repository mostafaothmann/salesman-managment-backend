import { Injectable } from '@nestjs/common';
import { CreateTypeIngredientDto } from './dto/create-type-ingredient.dto';
import { UpdateTypeIngredientDto } from './dto/update-type-ingredient.dto';

@Injectable()
export class TypeIngredientService {
  create(createTypeIngredientDto: CreateTypeIngredientDto) {
    return 'This action adds a new typeIngredient';
  }

  findAll() {
    return `This action returns all typeIngredient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeIngredient`;
  }

  update(id: number, updateTypeIngredientDto: UpdateTypeIngredientDto) {
    return `This action updates a #${id} typeIngredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeIngredient`;
  }
}
