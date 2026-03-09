import { Area } from "src/area/entities/area.entity";
import { City } from "src/city/entities/city.entity";
import { Governorate } from "src/governorate/entities/governorate.entity";
import { Street } from "src/street/entities/street.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hospital {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    lat: string;//latitude of the place 

    @Column({ type: 'varchar', length: 255, nullable: false })
    lan: string;//langitude of the place 

    @Column({ type: 'varchar', length: 255, nullable: false })
    phone_number: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    telephone_number: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    salesman_description: string

    @Column({ type: 'varchar', length: 255, nullable: true })
    admin_description: string

    @Column({ type: 'int', nullable: false, default: 0 })
    classification: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    type: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    governorate_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    city_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    area_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    street_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    average_patients_per_day: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each Governorate has many doctors in it 
    @ManyToOne(() => Governorate)
    @JoinColumn({ name: 'governorate_id' })
    Governorate: Governorate;

    //each City has many doctors in it 
    @ManyToOne(() => City)
    @JoinColumn({ name: 'city_id' })
    City: City;

    //each Area has many doctors in it 
    @ManyToOne(() => Area)
    @JoinColumn({ name: 'area_id' })
    Area: Area;

    //each Street has many doctors in it 
    @ManyToOne(() => Street)
    @JoinColumn({ name: 'street_id' })
    Street: Street;

    /*    //each Building has many doctors in it 
       @ManyToOne(() => Building)
       @JoinColumn({ name: 'building_id' })
       Building: Building; */

    //each Specialization has many doctors in it 

}

