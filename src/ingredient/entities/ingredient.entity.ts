import { TypeIngredient } from "src/type-ingredient/entities/type-ingredient.entity";
import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingredient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;//name of ingredient

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;//description of the ingredient

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    quantity: string;//description of the ingredient

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each Ingredient has many TypeIngredients
    @OneToMany(() => TypeIngredient, typeIngredient => typeIngredient.ingredient)
    typeIngredients: TypeIngredient[];
    
}
