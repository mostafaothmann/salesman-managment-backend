import { RecoveryCase } from "src/recovery-case/entities/recovery-case.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RecoveryCaseImage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 255 })
    description: string;//description of the photo

    @Column({ type: 'varchar', nullable: true, length: 255 })
    photo: string;//photo url

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each type has many recovery cases 
    @ManyToOne(() => RecoveryCase)
    @JoinColumn({ name: 'recovery_case_id' })
    RecoveryCase: RecoveryCase;
}
