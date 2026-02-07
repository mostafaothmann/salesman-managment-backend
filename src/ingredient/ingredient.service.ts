import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepo: Repository<Ingredient>,
  ) { }

  create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const area = this.ingredientRepo.create(createIngredientDto);
    return this.ingredientRepo.save(area);
  }

  findAll(): Promise<Ingredient[]> {
    return this.ingredientRepo.find();
  }

  findOne(id: number): Promise<Ingredient | null> {
    return this.ingredientRepo.findOneBy({ id });
  }

  async update(id: number, updateAreaDto: UpdateIngredientDto): Promise<Ingredient | null> {
    await this.ingredientRepo.update(id, updateAreaDto);
    return this.ingredientRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.ingredientRepo.delete(id);
  }
}
