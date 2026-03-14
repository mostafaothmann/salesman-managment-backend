import { BaseOffer } from "src/base-offer/entities/base-offer.entity";
import { Order } from "src/order/entities/order.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Offer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    base_offer_id: number;//which offer is related to 


    @Column({ type: 'int', nullable: false, default: null })
    total_percentage: number;//total_percentage afeter the return for the salesman

    @Column({ type: 'int', nullable: false, default: null })
    base_percentage: number;//total_percentage for the salesman

    @Column({ type: 'int', nullable: false, default: null })
    total_delivery_percentage: number;//total_percentage for the salesman

    @Column({ type: 'int', nullable: false })
    order_id: number;//which order is related to 

    @Column({ type: 'int', nullable: false })
    price_for_piece: number;

    @Column({ type: 'int', nullable: false })
    base_quantity: number;

    @Column({ type: 'int', nullable: false, default: null })
    percentage_for_piece: number;//total_percentage for the salesman

    @Column({ type: 'int', nullable: false, default: null })
    delivery_percentage_for_piece: number;//total_percentage for the salesman

    @Column({ type: 'int', nullable: false, default: 0 })
    return_quantity: number;

    @Column({ type: 'int', nullable: false, default: null })
    total_quantity: number;

    @Column({ type: 'int', nullable: false })
    base_total_price: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    return_total_price: number;

    @Column({ type: 'int', nullable: false, default: null })
    return_discount: number;

    @Column({ type: 'int', nullable: false })
    total_price: number;

    @Column({ type: 'boolean', nullable: false, default: false })
    has_return: boolean;

    @Column({ type: 'boolean', nullable: false, default: false })
    is_with_gift: boolean;

    @Column({ type: 'datetime', nullable: false })
    return_date: Date;//date of return

    //each BaseOffer has many offers in it 
    @ManyToOne(() => BaseOffer)
    @JoinColumn({ name: 'base_offer_id' })
    baseOffer: BaseOffer;

    //each Pharmacist has many offers in it 
    @ManyToOne(() => Order)
    @JoinColumn({ name: 'order_id' })
    order: Order;

}
