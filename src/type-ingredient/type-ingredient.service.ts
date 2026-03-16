import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { TypeIngredient } from './entities/type-ingredient.entity';
import { CreateTypeIngredientDto } from './dto/create-type-ingredient.dto';
import { UpdateTypeIngredientDto } from './dto/update-type-ingredient.dto';


@Injectable()
export class TypeIngredientService {
  constructor(
    @InjectRepository(TypeIngredient)
    private readonly typeIngredientRepo: Repository<TypeIngredient>,
    private readonly dataSource: DataSource
  ) { }

  create(createTypeIngredientDto: CreateTypeIngredientDto): Promise<TypeIngredient> {
    const offer = this.typeIngredientRepo.create(createTypeIngredientDto);
    return this.typeIngredientRepo.save(offer);
  }

  findAll(): Promise<TypeIngredient[]> {
    return this.typeIngredientRepo.find();
  }

  findOne(id: number): Promise<TypeIngredient | null> {
    return this.typeIngredientRepo.findOneBy({ id });
  }

  async update(id: number, updateTypeIngredientDto: UpdateTypeIngredientDto): Promise<TypeIngredient | null> {
    await this.typeIngredientRepo.update(id, updateTypeIngredientDto);
    return this.typeIngredientRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.typeIngredientRepo.delete(id);
  }
}
