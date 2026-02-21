import { Module } from '@nestjs/common';
import { TypeIngredientService } from './type-ingredient.service';
import { TypeIngredientController } from './type-ingredient.controller';
import { TypeIngredient } from './entities/type-ingredient.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypeIngredient])],
  controllers: [TypeIngredientController],
  providers: [TypeIngredientService],
})
export class TypeIngredientModule {}
