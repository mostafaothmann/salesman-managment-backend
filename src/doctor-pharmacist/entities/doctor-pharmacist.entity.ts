import { Doctor } from "src/doctor/entities/doctor.entity";
import { Pharmacist } from "src/pharmacist/entities/pharmacist.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_doctor_pharmacist', ['doctor', 'pharmacist']) // prevents duplicates
export class DoctorPharmacist {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'varchar', nullable: false, default: "normal" })
    status: string;

    //each pharmacist has many doctors 
    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctor_id' })
    doctor: Doctor;

    //each doctor has many pharmacists 
    @ManyToOne(() => Pharmacist)
    @JoinColumn({ name: 'pharmacist_id' })
    pharmacist: Pharmacist;

}
