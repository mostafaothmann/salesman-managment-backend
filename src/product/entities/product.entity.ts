import { OnlineOrder } from "src/online-order/entities/online-order.entity";
import { Order } from "src/order/entities/order.entity";
import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    quantity: number;//amount of the final requested product

    @Column({ type: 'int', nullable: false })
    price_for_piece: number;

    @Column({ type: 'int', nullable: false })
    base_quantity: number;//amount of the base requested product

    @Column({ type: 'int', nullable: false, default: null })
    return_quantity: number;//amount of the requested product

    @Column({ type: 'int', nullable: false, default: null })
    return_discount: number;//changeable 7% or 15%

    @Column({ type: 'boolean', nullable: false ,default:false})
    has_return: boolean;//is there a return for this 

    @Column({ type: 'int', nullable: false })
    base_total_price: number;//price before return

    @Column({ type: 'int', nullable: false, default: null })
    return_total_price: number;//price after return 

    @Column({ type: 'int', nullable: false })
    total_price: number;//total final price of the requsted product

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each order has many products 
    @ManyToOne(() => Order)
    @JoinColumn({ name: 'order_id' })
    Order: Order;

    //each type has many products 
    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    Type: Type;

}
