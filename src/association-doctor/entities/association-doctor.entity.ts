import { Association } from "src/association/entities/association.entity";
import { Doctor } from "src/doctor/entities/doctor.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_association_doctor', ['association', 'doctor']) // prevents duplicates
export class AssociationDoctor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false, default: "normal" })
    status: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctor_id' })
    doctor: Doctor

    @ManyToOne(() => Association)
    @JoinColumn({ name: 'association_id' })
    association: Association

}
