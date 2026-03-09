import { IsNotEmpty, IsNumber } from "class-validator";
import { BaseOffer } from "src/base-offer/entities/base-offer.entity";
import { OnlineOrder } from "src/online-order/entities/online-order.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OnlineOffer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    base_offer_id: number;

    @Column({ type: 'int', nullable: false })
    online_order_id: number;

    @IsNumber()
    @IsNotEmpty()
    total_price: number;

    @IsNumber()
    @IsNotEmpty()
    total_quantity: number;

    //each BaseOffer has many offers in it 
    @ManyToOne(() => BaseOffer)
    @JoinColumn({ name: 'base_offer_id' })
    baseOffer: BaseOffer;

    //each Pharmacist has many offers in it 
    @ManyToOne(() => OnlineOrder)
    @JoinColumn({ name: 'online_order_id' })
    onlineOrder: OnlineOrder;

}

