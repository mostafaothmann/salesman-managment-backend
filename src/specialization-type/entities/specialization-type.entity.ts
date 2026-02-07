import { Specialization } from "src/specialization/entities/specialization.entity";
import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SpecializationType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true, default: "normal" })
    status: string;

    @Column({ type: 'int', nullable: false })
    specialization_id: number;

    @Column({ type: 'int', nullable: false })
    type_id: number;

    @ManyToOne(() => Specialization)
    @JoinColumn({ name: 'specialization_id' })
    specialization: Specialization;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    type: Type;

}
