import { Association } from "src/association/entities/association.entity";
import { Pharmacist } from "src/pharmacist/entities/pharmacist.entity";
import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class AssociationPharmacist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false, default: "normal" })
    status: string;

    @ManyToOne(() => Pharmacist)
    @JoinColumn({ name: 'pharmacist_id' })
    pharmacist: Pharmacist

    @ManyToOne(() => Association)
    @JoinColumn({ name: 'association_id' })
    association: Association

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

}
