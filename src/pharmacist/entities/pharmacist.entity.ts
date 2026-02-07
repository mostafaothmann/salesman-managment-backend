import { Area } from "src/area/entities/area.entity";
import { Building } from "src/building/entities/building.entity";
import { City } from "src/city/entities/city.entity";
import { Governorate } from "src/governorate/entities/governorate.entity";
import { Street } from "src/street/entities/street.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pharmacist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    first_name: string;//first name of the Pharmacist

    @Column({ type: 'varchar', nullable: false })
    last_name: string;//last name of the Pharmacist

    @Column({ type: 'datetime', nullable: false })
    birth_date: Date;//birth date of the Pharmacist

    @Column({ type: 'int', nullable: false })
    phone_number: string;//birth date of the Pharmacist

    @Column({ type: 'varchar', length: 255, nullable: false })
    photo: string;

    @Column({ type: 'int', nullable: false })
    total_requested_products: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    graduation_university: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    loyalty: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    work_time: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    favorite_time: string;

    @Column({ type: 'time', nullable: false })
    favorite_time_opening: string;

    @Column({ type: 'time', nullable: false })
    favorite_time_closing: string

    @Column({ type: 'varchar', length: 255, nullable: false })
    last_visit_note: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    classification: number;

    @Column({ type: 'int', nullable: false })
    average_patients_per_day: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'time', nullable: false })
    first_work_opeining_time: string

    @Column({ type: 'time', nullable: false })
    first_work_closing_time: string

    @Column({ type: 'time', nullable: false })
    second_work_opining_time: string

    @Column({ type: 'time', nullable: false })
    second_work_closing_time: string

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

    //each Building has many doctors in it 
    @ManyToOne(() => Building)
    @JoinColumn({ name: 'building_id' })
    Building: Building;

}
