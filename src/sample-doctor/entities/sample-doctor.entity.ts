import { DoctorVisit } from 'src/doctor-visit/entities/doctor-visit.entity';
import { Type } from 'src/type/entities/type.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_sample_doctor', ['doctorVisit', 'type']) // prevents duplicates
export class SampleDoctor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false, default: 1 })
    quantity: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;//account creating date 

    @Column({ type: 'int', nullable: false })
    doctor_visit_id: number;

    @Column({ type: 'int', nullable: false })
    type_id: number;

    //each visit has many samples 
    @ManyToOne(() => DoctorVisit)
    @JoinColumn({ name: 'doctor_visit_id' })
    doctorVisit: DoctorVisit;

    //each type has many samples 
    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    type: Type;

}
