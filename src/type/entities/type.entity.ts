import { GroupType } from "src/group-type/entities/group-type.entity";
import { SpecializationType } from "src/specialization-type/entities/specialization-type.entity";
import { TypeIngredient } from "src/type-ingredient/entities/type-ingredient.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Type {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;//name of the type

    @Column({ type: 'varchar', length: 255, nullable: true })
    admin_description: string;//admin description of the type

    @Column({ type: 'varchar', length: 255, nullable: true })
    salesman_description: string;//salesmandescription of the type

    @Column({ type: 'datetime', nullable: true })
    manufacturing_date: Date;//the date when the type has been creted  

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;//type creating date 

    @Column({ type: 'varchar', length: 255, nullable: true })
    brand: string;//brand of the type 

    @Column({ type: 'int', nullable: true })
    price_for_piece: number;//price for one piece of the type 


    @Column({ type: 'int', nullable: true, default: 1 })
    quantity: number;//quantity existed in the repos

    @Column({ type: 'int', nullable: true, default: 1 })
    delivery_percentage: number;//delivery percentage on the type

    @Column({ type: 'int', nullable: true, default: 10 })
    percentage: number;//percentage for field salesman

    @Column({ type: 'int', nullable: true, default: 10 })
    online_percentage: number;//percentage for online salesman 

    @Column({ type: 'int', nullable: false, default: 10 })
    type: number;//type is to indicate if its for online salesman or field salesman

    @Column({ type: 'int', nullable: false, default: 1 })
    grouptype_id: number;//indicated the groput of the type 

    //each type has many products 
    @ManyToOne(() => GroupType, groupType => groupType.types)
    @JoinColumn({ name: 'grouptype_id' })
    groupType: GroupType;

    @OneToMany(() => SpecializationType, specializationType => specializationType.specialization)
    specializationTypes: SpecializationType[];

    //each Ingredient has many TypeIngredients
    @OneToMany(() => TypeIngredient, typeIngredient => typeIngredient.ingredient)
    typeIngredients: TypeIngredient[];
}
