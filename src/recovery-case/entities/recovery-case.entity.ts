import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RecoveryCase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    description: string;//description of the Case

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;//uploaded date of the Case

    @Column({ type: 'datetime', nullable: false })
    start_treatment: Date;//start date of Treatment

    @Column({ type: 'datetime', nullable: false })
    end_treatment: Date;//end date of Treatment

    @Column({ type: 'int', nullable: false })
    type_id: Date;

    //each type has many recovery cases 
    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    Type: Type;

}
