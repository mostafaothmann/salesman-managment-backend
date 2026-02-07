import { OnlineOrder } from "src/online-order/entities/online-order.entity";
import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OnlineProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    total_price: number;//total price of the requsted product

    @Column({ type: 'int', nullable: false })
    quantity: number;//amount of the requsted product

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each order has many products 
    @ManyToOne(() => OnlineOrder)
    @JoinColumn({ name: 'order_id' })
    OnlineOrder: OnlineOrder;

    //each type has many products 
    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    Type: Type;
}
