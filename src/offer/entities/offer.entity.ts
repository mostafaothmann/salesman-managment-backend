import { BaseOffer } from "src/base-offer/entities/base-offer.entity";
import { Order } from "src/order/entities/order.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Offer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    base_offer_id: number;//which offer is related to 

    @Column({ type: 'int', nullable: true, default: null })
    total_percentage: number;//total_percentage afeter the return for the salesman

    @Column({ type: 'int', nullable: true, default: null })
    base_percentage: number;//total_percentage for the salesman

    @Column({ type: 'int', nullable: true, default: null })
    total_delivery_percentage: number;//total_percentage for the salesman

    @Column({ type: 'int', nullable: true, default: null })
    return_percentage: number;//total_percentage for the salesman

    @Column({ type: 'int', nullable: false })
    order_id: number;//which order is related to 

    @Column({ type: 'int', nullable: true })
    price_for_piece: number;

    @Column({ type: 'int', nullable: true })
    base_quantity: number;

    @Column({ type: 'int', nullable: true, default: null })
    percentage_for_piece: number;//total_percentage for the salesman

    @Column({ type: 'int', nullable: true, default: null })
    delivery_percentage_for_piece: number;//total_percentage for the salesman

    @Column({ type: 'int', nullable: false, default: 0 })
    return_quantity: number;

    @Column({ type: 'int', nullable: true, default: null })
    total_quantity: number;

    @Column({ type: 'int', nullable: true })
    base_total_price: number;

    @Column({ type: 'int', nullable: true, default: 0 })
    return_total_price: number;

    @Column({ type: 'int', nullable: true, default: null })
    return_discount: number;

    @Column({ type: 'int', nullable: true })
    total_price: number;

    @Column({ type: 'boolean', nullable: true, default: false })
    has_return: boolean;

    @Column({ type: 'boolean', nullable: true, default: false })
    is_with_gift: boolean;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each BaseOffer has many offers in it 
    @ManyToOne(() => BaseOffer)
    @JoinColumn({ name: 'base_offer_id' })
    baseOffer: BaseOffer;

    //each Pharmacist has many offers in it 
    @ManyToOne(() => Order)
    @JoinColumn({ name: 'order_id' })
    order: Order;

}
