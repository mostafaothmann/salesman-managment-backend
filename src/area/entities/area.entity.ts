import { City } from "src/city/entities/city.entity";
import { Street } from "src/street/entities/street.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Area {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

    @Column({ type: 'int', nullable: false })
    city_id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each City has areas in it 
    @ManyToOne(() => City)
    @JoinColumn({ name: 'city_id' })
    city: City;

    @OneToMany(() => Street, street => street.area)
    streets: Street

}
