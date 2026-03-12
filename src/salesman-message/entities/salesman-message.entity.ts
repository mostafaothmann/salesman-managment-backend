import { Salesman } from "src/salesman/entities/salesman.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SalesmanMessage {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: "datetime" })
    created_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: false })
    title: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    content: string;

    @Column({ type: 'int', nullable: false })
    salesman_id: number;

    //each area has many salesmen
    @ManyToOne(() => Salesman)
    @JoinColumn({ name: 'salesman_id' })
    salesman: Salesman;

}
