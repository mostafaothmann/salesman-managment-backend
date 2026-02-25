import { PharmacistVisit } from "src/pharmacist-visit/entities/pharmacist-visit.entity";
import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_sample_pharmacist', ['pharmacistVisit', 'type']) // prevents duplicates
export class SamplePharmacist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;//account creating date 

    @CreateDateColumn({ type: 'int', nullable: false })
    doctor_visit_id: number;//account creating date 

    @CreateDateColumn({ type: 'int', nullable: false })
    type_id: number;

    //each visit has many samples 
    @ManyToOne(() => PharmacistVisit)
    @JoinColumn({ name: 'doctor_visit_id' })
    pharmacistVisit: PharmacistVisit;

    //each type has many samples 
    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    type: Type;
}
