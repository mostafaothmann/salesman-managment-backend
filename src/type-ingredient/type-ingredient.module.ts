import { Module } from '@nestjs/common';
import { TypeIngredientService } from './type-ingredient.service';
import { TypeIngredientController } from './type-ingredient.controller';

@Module({
  controllers: [TypeIngredientController],
  providers: [TypeIngredientService],
})
export class TypeIngredientModule {}
