import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepo: Repository<Ingredient>,
    private readonly dataSource: DataSource
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

  async getTypes(id: number): Promise<void> {
    console.log("id  :  ", id)
    return await this.dataSource.query(`select t.name,ti.quantity_percentage from type_ingredient ti INNER JOIN type t ON t.id = ti.type_id where ti.ingredient_id=${id}; `)
  }
}
