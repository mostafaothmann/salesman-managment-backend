import { Street } from "src/street/entities/street.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Building {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

    @Column({ type: 'int', nullable: false })
    street_id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each Area has streets in it 
    @ManyToOne(() => Street)
    @JoinColumn({ name: 'street_id' })
    street: Street;

}
