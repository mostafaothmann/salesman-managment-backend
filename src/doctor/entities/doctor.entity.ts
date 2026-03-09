import { Area } from "src/area/entities/area.entity";
import { LOYALTY } from "src/auth/enums/loyalty-enums";
import { WORKTIME } from "src/auth/enums/worktime-enums";
import { Building } from "src/building/entities/building.entity";
import { City } from "src/city/entities/city.entity";
import { Governorate } from "src/governorate/entities/governorate.entity";
import { Specialization } from "src/specialization/entities/specialization.entity";
import { Street } from "src/street/entities/street.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    first_name: string;//first name of the Pharmacist

    @Column({ type: 'varchar', length: 255, nullable: false })
    last_name: string;//last name of the Pharmacist

    @Column({ type: 'varchar', length: 255, nullable: false })
    lat: string;//latitude of the place 

    @Column({ type: 'varchar', length: 255, nullable: false })
    lan: string;//langitude of the place 

    @Column({ type: 'datetime', nullable: true })
    birth_date: Date;//birth date of the Doctor

    @Column({ type: 'varchar', length: 255, nullable: false })
    phone_number: string;

    @Column({ type: 'boolean', nullable: false, default: true })
    is_added_by_assistant: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    telephone_number: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    graduation_university: string;

    @Column({ type: 'int', nullable: true, default: 1 })
    loyalty: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    salesman_description: string

    @Column({ type: 'varchar', length: 255, nullable: true })
    admin_description: string

    @Column({ type: 'varchar', nullable: true })
    favourite_time_opening: string;

    @Column({ type: 'varchar', nullable: true })
    favourite_time_closing: string

    @Column({ type: 'varchar', nullable: false })
    first_work_time_opening: string

    @Column({ type: 'varchar', nullable: false })
    first_work_time_closing: string

    @Column({ type: 'varchar', nullable: false })
    second_work_time_opening: string

    @Column({ type: 'varchar', nullable: true })
    second_work_time_closing: string

    @Column({ type: 'datetime', nullable: true })
    last_visit_date: Date;

    @Column({ type: 'varchar', length: 255, nullable: false })
    last_visit_note: string;

    @Column({ type: 'int', nullable: false, default: 0 })
    classification: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    governorate_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    city_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    sex: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    area_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    street_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    specialization_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    average_patients_per_day: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: true, default: "" })
    wife_husband_first_name: string;

    @Column({ type: 'varchar', length: 255, nullable: true, default: "" })
    wife_husband_last_name: string;

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
    @ManyToOne(() => Specialization)
    @JoinColumn({ name: 'specialization_id' })
    specialization: Specialization;

}
