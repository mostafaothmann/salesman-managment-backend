import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingredient {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;//name of ingredient

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;//description of the ingredient

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable:true})
    quantity: string;//description of the ingredient

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

}
