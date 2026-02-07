import { Assistant } from "src/assistant/entities/assistant.entity";
import { Salesman } from "src/salesman/entities/salesman.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OnlineCustomer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    first_name: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    last_name: string;

    @Column({ type: 'datetime', nullable: false })
    birth_date: Date;

    @Column({ type: 'int', nullable: false })
    phone_number: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'datetime', nullable: true})
    verified_at: Date;

    @Column({ type: 'int', nullable: false })
    assistant_id: number;

    @Column({ type: 'int', nullable: false })
    salesman_id: number;

    //each assistant has many online customers 
    @ManyToOne(() => Assistant)
    @JoinColumn({ name: 'assistant_id' })
    assistant: Assistant;

    //each assistant has many orders 
    @ManyToOne(() => Salesman)
    @JoinColumn({ name: 'salesman_id' })
    salesman: Salesman;

}
