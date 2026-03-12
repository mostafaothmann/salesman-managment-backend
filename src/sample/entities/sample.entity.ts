import { DoctorVisit } from 'src/doctor-visit/entities/doctor-visit.entity';
import { Type } from 'src/type/entities/type.entity';
import { Visit } from 'src/visit/entities/visit.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_sample', ['visit', 'type']) // prevents duplicates
export class Sample {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false, default: 1 })
    quantity: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;//account creating date 

    @Column({ type: 'int', nullable: false })
    visit_id: number;

    @Column({ type: 'int', nullable: false })
    type_id: number;

    //each visit has many samples 
    @ManyToOne(() => Visit)
    @JoinColumn({ name: 'visit_id' })
    visit: Visit;

    //each type has many samples 
    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    type: Type;

}
