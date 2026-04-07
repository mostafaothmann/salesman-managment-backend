import { Doctor } from "src/doctor/entities/doctor.entity";
import { Hospital } from "src/hospital/entities/hospital.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_hospital_doctor', ['hospital', 'doctor']) 
export class HospitalDoctor {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'int', nullable: false })
    doctor_id: number;

    @Column({ type: 'int', nullable: false })
    hospital_id: number;

    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctor_id' })
    doctor: Doctor

    @ManyToOne(() => Hospital)
    @JoinColumn({ name: 'hospital_id' })
    hospital: Hospital
}
