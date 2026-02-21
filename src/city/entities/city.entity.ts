import { Area } from "src/area/entities/area.entity";
import { Governorate } from "src/governorate/entities/governorate.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 255 })
    name: string;

    @Column({ type: 'varchar', nullable: true, length: 255 })
    description: string;

    @Column({ type: 'int', nullable: false })
    governorate_id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each Governorate has cities in it 
    @ManyToOne(() => Governorate, governorate => governorate.cities)
    @JoinColumn({ name: 'governorate_id' })
    governorate: Governorate;
    
    //children
    @OneToMany(() => Area, area => area.city)
    areas:Area;

}
