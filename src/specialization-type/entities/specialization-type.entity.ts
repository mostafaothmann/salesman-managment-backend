import { Specialization } from "src/specialization/entities/specialization.entity";
import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_specialization_type',['type', 'specialization']) // prevents duplicates
export class SpecializationType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true, default: "normal" })
    status: string;

    @Column({ type: 'int', nullable: false })
    specialization_id: number;

    @Column({ type: 'int', nullable: false })
    type_id: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    type: Type;

    //each Governorate has cities in it 
    @ManyToOne(() => Specialization, specialization => specialization.specializationTypes)
    @JoinColumn({ name: 'specialization_id' })
    specialization: Specialization;

}
