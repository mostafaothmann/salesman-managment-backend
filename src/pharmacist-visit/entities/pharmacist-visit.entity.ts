import { Pharmacist } from "src/pharmacist/entities/pharmacist.entity";
import { Visit } from "src/visit/entities/visit.entity";
import { ChildEntity, Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@ChildEntity()
export class PharmacistVisit extends Visit {

    @Column({ type: 'int', nullable: false })
    pharmacist_id: number;

    //each Pharmacist has many visits
    @ManyToOne(() => Pharmacist)
    @JoinColumn({ name: 'pharmacist_id' })
    pharmacist: Pharmacist;

}
