import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Type {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;//name of the type

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;//description of the type

    @Column({ type: 'datetime', nullable: true })
    manufacturing_date: Date;//the date when the type has been creted  

    @Column({ type: 'varchar', length: 255, nullable: true })
    brand: string;//brand of the type 

    @Column({ type: 'int', nullable: true })
    price_for_piece: number;//price for one piece of the type 

    @Column({ type: 'int', nullable: true })
    salesman_percentage: number;//price for one piece of the type 

    @Column({ type: 'int', nullable: true, default: 1 })
    quantity: number;//price for one piece of the type 

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;//account creating date 

}
