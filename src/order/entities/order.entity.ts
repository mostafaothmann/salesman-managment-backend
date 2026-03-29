import { Assistant } from "src/assistant/entities/assistant.entity";
import { Pharmacist } from "src/pharmacist/entities/pharmacist.entity";
import { Salesman } from "src/salesman/entities/salesman.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false, default: 0 })
    note: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'datetime', nullable: false })
    validated_at: Date;

    @Column({ type: 'int', nullable: false, default: 0 })
    base_total_price: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    salesman_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    pharmasict_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    assistant_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_return_price: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_price: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    base_total_quantity: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_return_quantity: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_quantity: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    base_total_percentage: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_return_percentage: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_percentage: number;

    @Column({ type: 'int', nullable: false, default: 1 })
    order_status: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_delivery_percentage: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    is_there_return: Boolean;

    //describes if it is a return 
    @Column({ type: 'datetime', nullable: false })
    return_date: Date;

    //each salesman has many orders 
    @ManyToOne(() => Salesman)
    @JoinColumn({ name: 'salesman_id' })
    salesman: Salesman;

    //each assistant has many orders 
    @ManyToOne(() => Assistant)
    @JoinColumn({ name: 'assistant_id' })
    assistant: Assistant;

    //each pharmacist has many orders 
    @ManyToOne(() => Pharmacist)
    @JoinColumn({ name: 'pharmacist_id' })
    pharmacist: Pharmacist;
}
