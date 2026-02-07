import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaseOffer {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({type:'datetime'})
    created_at: Date;

    @Column({ type: 'int', nullable: false })
    number_of_gifts: number;

    @Column({ type: 'int', nullable: false })
    number_of_pieces: number;

    @Column({ type: 'int', nullable: false })
    type_id: number;

    //each BaseOffer has many offers in it 
    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    type: Type;

}
