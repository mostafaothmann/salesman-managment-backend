import { Association } from "src/association/entities/association.entity";
import { Doctor } from "src/doctor/entities/doctor.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AssociationDoctor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false,default: "normal" })
    status: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctor_id' })
    doctor: Doctor

    @ManyToOne(() => Association)
    @JoinColumn({ name: 'association_id' })
    association: Association

}
