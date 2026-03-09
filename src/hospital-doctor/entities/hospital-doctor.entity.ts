import { Doctor } from "src/doctor/entities/doctor.entity";
import { Hospital } from "src/hospital/entities/hospital.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HospitalDoctor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false, default: "normal" })
    status: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'int',  nullable: false })
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
