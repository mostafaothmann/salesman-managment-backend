import { Association } from "src/association/entities/association.entity";
import { Pharmacist } from "src/pharmacist/entities/pharmacist.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_association_pharmacist', ['association', 'pharmacist']) // prevents duplicates
export class AssociationPharmacist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false, default: "normal" })
    status: number;

    @ManyToOne(() => Pharmacist)
    @JoinColumn({ name: 'pharmacist_id' })
    pharmacist: Pharmacist

    @ManyToOne(() => Association)
    @JoinColumn({ name: 'association_id' })
    association: Association

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

}
