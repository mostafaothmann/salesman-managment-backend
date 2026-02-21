import { Ingredient } from "src/ingredient/entities/ingredient.entity";
import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TypeIngredient {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    type_id: number;

    @Column({ type: 'int', nullable: false })
    ingredient_id: number;

    @Column({ type: 'int', nullable: true })
    quantity_percentage: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;
  
    //each TypeIngredient has Type in it 
    @ManyToOne(() => Type, type=>type.typeIngredients)
    @JoinColumn({ name: 'type_id' })
    Type: Type;
    
    //each TypeIngredient has Type in it 
    @ManyToOne(() => Ingredient,ingredient=>ingredient.typeIngredients)
    @JoinColumn({ name: 'ingredient_id' })
    ingredient: Ingredient;


}
