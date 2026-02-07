import { Ingredient } from "src/ingredient/entities/ingredient.entity";
import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";
import { JoinColumn } from "typeorm/browser";
import { ManyToOne } from "typeorm/browser";

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

    //each TypeIngredient has Ingredient in it 
    @ManyToOne(() => Ingredient)
    @JoinColumn({ name: 'type_id' })
    Ingredient: Ingredient;

    //each TypeIngredient has Type in it 
    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    Type: Type;

}
