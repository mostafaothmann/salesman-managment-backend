import { Assistant } from "src/assistant/entities/assistant.entity";
import { Salesman } from "src/salesman/entities/salesman.entity";
import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, TableInheritance, UpdateDateColumn } from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "typeC" } })
export class Visit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    typeC: string;

    @Column({ type: 'varchar', nullable: false })
    lan: string;

    @Column({ type: 'varchar', nullable: false })
    lat: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    photo: string;//photo of the visiting document with either the signature or the stamp on it

    @Column({ type: 'varchar', length: 255, nullable: false, default: "لا شيء" })
    note: string;//note on how the doctor/pharmacist treated the salesman 

    @Column({ type: 'varchar', length: 255, nullable: true })
    closest_pharmacy: string;//the closest pharmacy to the /pharmacist to be added by the admin after that 

    @Column({ type: 'varchar', length: 255, nullable: true })
    rejection_cause: string;//the cause of rejection

    @UpdateDateColumn({ type: 'datetime' })
    validated_at: Date;//time on it the assistant validated the visit

    @Column({ type: 'int', nullable: false })
    number_of_patients: number;//number of patients that were in the clinic

    @Column({ type: 'boolean', nullable: false, default: false })
    is_other_spoken_note: boolean;//boolean to indicate if there is other spoken note

    @Column({ type: 'int', nullable: false, default: 1 })
    visit_status_id: number;//status of the visit created/under review/accepted/refuesed

    @Column({ type: 'int', nullable: false })
    salesman_id: number;//id of the salesman

    @Column({ type: 'int', nullable: false })
    type_id: number;//id of the type

    @Column({ type: 'int', nullable: false })
    assistant_id: number;//id of the assistant

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;//time on it the salesman submitted the visit to be comitted

    //each Type has many visits 
    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    type: Type;

    //each Salesman has many visits 
    @ManyToOne(() => Salesman)
    @JoinColumn({ name: 'salesman_id' })
    salesman: Salesman;

    //each Assistant has many validated visits 
    @ManyToOne(() => Assistant)
    @JoinColumn({ name: 'assistant_id' })
    assistant: Assistant;
}
