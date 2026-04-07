import { BaseGift } from "src/base-gift/entities/base-gift.entity";
import { Visit } from "src/visit/entities/visit.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GiftVisit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    base_gift_id: number;

    @Column({ type: 'int', nullable: false, default: 1 })
    quantity: number;

    @Column({ type: 'int', nullable: false })
    visit_id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;
    //each BaseGift has gift-visit s in it 
    @ManyToOne(() => BaseGift)
    @JoinColumn({ name: 'base_gift_id' })
    baseGift: BaseGift;

    //each Visit has gift-visit s in it 
    @ManyToOne(() => Visit)
    @JoinColumn({ name: 'visit_id' })
    visit: Visit;

}
