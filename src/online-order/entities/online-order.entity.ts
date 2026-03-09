import { Assistant } from "src/assistant/entities/assistant.entity";
import { OnlineCustomer } from "src/online-customer/entities/online-customer.entity";
import { Salesman } from "src/salesman/entities/salesman.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OnlineOrder {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'datetime', nullable: true })
    validated_at: Date;

    @Column({ type: 'int', nullable: false })
    assistant_id: number;

    @Column({ type: 'int', nullable: false })
    salesman_id: number;

    @Column({ type: 'int', nullable: false })
    online_customer_id: number;


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

    //each salesman has many online orders 
    @ManyToOne(() => Salesman)
    @JoinColumn({ name: 'salesman_id' })
    salesman: Salesman;

    //each assistant has many online orders 
    @ManyToOne(() => Assistant)
    @JoinColumn({ name: 'assistant_id' })
    assistant: Assistant;

    //each online customer has many online orders 
    @ManyToOne(() => OnlineCustomer)
    @JoinColumn({ name: 'online_customer_id' })
    onlineCustomer: OnlineCustomer;

}
