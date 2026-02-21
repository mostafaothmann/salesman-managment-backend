import { SpecializationType } from "src/specialization-type/entities/specialization-type.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialization {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;
    
    @OneToMany(()=>SpecializationType,specializationType=>specializationType.specialization)
    specializationTypes:SpecializationType[];
}
