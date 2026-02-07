import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeIngredientDto } from './create-type-ingredient.dto';

export class UpdateTypeIngredientDto extends PartialType(CreateTypeIngredientDto) {}
