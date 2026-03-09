import { Hospital } from "src/hospital/entities/hospital.entity";
import { Pharmacist } from "src/pharmacist/entities/pharmacist.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HospitalPharmacist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false, default: "normal" })
    status: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'int', nullable: false })
    pharmacist_id: number;

    @Column({ type: 'int', nullable: false })
    hospital_id: number;

    @ManyToOne(() => Pharmacist)
    @JoinColumn({ name: 'pharmacist_id' })
    pharmacist: Pharmacist

    @ManyToOne(() => Hospital)
    @JoinColumn({ name: 'hospital_id' })
    hospital: Hospital
}
