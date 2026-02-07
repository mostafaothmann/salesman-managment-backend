import { Area } from "src/area/entities/area.entity";
import { Building } from "src/building/entities/building.entity";
import { City } from "src/city/entities/city.entity";
import { Governorate } from "src/governorate/entities/governorate.entity";
import { Street } from "src/street/entities/street.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Assistant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    first_name: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    last_name: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    email: string;

    @Column({ type: 'varchar',length:10, nullable: false })
    phone_number: string;

    @Column({ type: 'varchar', nullable: false })
    telephone_number: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each Governorate has many assistants in it 
    @ManyToOne(() => Governorate)
    @JoinColumn({ name: 'governorate_id' })
    Governorate: Governorate;

    //each City has many assistants in it 
    @ManyToOne(() => City)
    @JoinColumn({ name: 'city_id' })
    City: City;

    //each Area has many assistants in it 
    @ManyToOne(() => Area)
    @JoinColumn({ name: 'area_id' })
    Area: Area;

    //each Street has many assistants in it 
    @ManyToOne(() => Street)
    @JoinColumn({ name: 'street_id' })
    Street: Street;

    //each Building has many assistants in it 
    @ManyToOne(() => Building)
    @JoinColumn({ name: 'building_id' })
    Building: Building;

}
