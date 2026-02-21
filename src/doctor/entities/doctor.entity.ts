import { Area } from "src/area/entities/area.entity";
import { LOYALTY } from "src/auth/enums/loyalty-enums";
import { WORKTIME } from "src/auth/enums/worktime-enums";
import { Building } from "src/building/entities/building.entity";
import { City } from "src/city/entities/city.entity";
import { Governorate } from "src/governorate/entities/governorate.entity";
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

    @Column({ type: 'datetime', nullable: false })
    birth_date: Date;//birth date of the Pharmacist

    @Column({ type: 'varchar', length: 255, nullable: false })
    phone_number: string;

    @Column({ type: 'boolean', nullable: false, default: true })
    is_added_by_assistant: boolean;

    @Column({ type: 'varchar', length: 255, nullable: false })
    telephone_number: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    graduation_university: string;

    @Column({ type: 'enum', enum: LOYALTY, nullable: true })
    loyalty: LOYALTY;

    @Column({ type: 'time', nullable: false })
    favorite_time_opening: string;

    @Column({ type: 'time', nullable: false })
    favorite_time_closing: string

    @Column({ type: 'time', nullable: false })
    first_work_opeining_time: string

    @Column({ type: 'time', nullable: false })
    first_work_closing_time: string

    @Column({ type: 'time', nullable: false })
    second_work_opining_time: string

    @Column({ type: 'time', nullable: false })
    second_work_closing_time: string

    @Column({ type: 'datetime', nullable: false })
    last_visit_date: Date;

    @Column({ type: 'varchar', length: 255, nullable: false })
    last_visit_note: string;

    @Column({ type: 'int', nullable: false, default: 0 })
    classification: number;

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

    //each Building has many doctors in it 
    @ManyToOne(() => Building)
    @JoinColumn({ name: 'building_id' })
    Building: Building;

}
