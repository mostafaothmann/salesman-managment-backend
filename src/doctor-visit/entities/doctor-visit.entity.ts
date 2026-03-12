
import { Doctor } from "src/doctor/entities/doctor.entity";
import { Visit } from "src/visit/entities/visit.entity";
import { ChildEntity, Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@ChildEntity()
export class DoctorVisit extends Visit {

    @Column({ type: 'int' })
    doctor_id: number;

    //each Doctor has many visits 
    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctor_id' })
    Doctor: Doctor;


}
