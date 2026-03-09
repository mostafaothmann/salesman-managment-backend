import { Assistant } from "src/assistant/entities/assistant.entity";
import { Pharmacist } from "src/pharmacist/entities/pharmacist.entity";
import { Salesman } from "src/salesman/entities/salesman.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'datetime', nullable: false })
    validated_at: Date;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_price: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_quantity: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    base_total_price: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    base_total_quantity: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_return_quantity: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_return_price: number;

    //describes if it is a return 
    @Column({ type: 'boolean', nullable: false })
    is_return: boolean;

    //describes if it is a return 
    @Column({ type: 'datetime', nullable: false })
    return_date: Date;

    //each salesman has many orders 
    @ManyToOne(() => Salesman)
    @JoinColumn({ name: 'salesman_id' })
    salesman: Salesman;

    //each Order has many orders (returns) self to self relationship
    @ManyToOne(() => Order)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    //each assistant has many orders 
    @ManyToOne(() => Assistant)
    @JoinColumn({ name: 'assistant_id' })
    assistant: Assistant;

    //each pharmacist has many orders 
    @ManyToOne(() => Pharmacist)
    @JoinColumn({ name: 'pharmacist_id' })
    pharmacist: Pharmacist;
}
