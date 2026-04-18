import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Area } from "src/area/entities/area.entity";
import { City } from "src/city/entities/city.entity";
import { Governorate } from "src/governorate/entities/governorate.entity";
import { Street } from "src/street/entities/street.entity";

@Entity()
export class Pharmacist {

    @PrimaryGeneratedColumn()
    id: number;

    // Personal Info
    @Column({ type: "varchar", length: 255 })
    first_name: string;

    @Column({ type: "varchar", length: 255 })
    second_name: string;

    @Column({ type: "varchar", length: 255 })
    last_name: string;

    @Column()
    classification_id: number;

    @Column()
    loyalty_id: number;

    @Column({ type: "date" })
    birth_date: string;

    @Column({ type: "varchar", nullable: true })
    admin_description: string;

    @Column({ type: "varchar", nullable: true })
    salesman_description: string;

    @Column({ type: "varchar", length: 255 })
    graduation_country: string;

    @Column({ type: "varchar", length: 255 })
    graduation_university: string;

    @Column({ type: "varchar", length: 20 })
    phone_number: string;

    @Column({ type: "varchar", length: 20, nullable: true })
    telephone_number: string;

    @Column()
    gender_id: number;

    @Column({ type: "varchar", length: 255 })
    email: string;

    // Place Info
    @Column({ type: "varchar", length: 100, nullable: true })
    lan: string | null;

    @Column({ type: "varchar", length: 100, nullable: true })
    lat: string | null;

    @Column()
    governorate_id: number;

    @Column()
    city_id: number;

    @Column()
    area_id: number;

    @Column()
    street_id: number;

    @Column({ type: "varchar" })
    full_place: string;

    @Column({ type: "varchar" })
    close_place: string;

    @ManyToOne(() => Governorate)
    @JoinColumn({ name: "governorate_id" })
    governorate: Governorate;

    @ManyToOne(() => City)
    @JoinColumn({ name: "city_id" })
    city: City;

    @ManyToOne(() => Area)
    @JoinColumn({ name: "area_id" })
    area: Area;

    @ManyToOne(() => Street)
    @JoinColumn({ name: "street_id" })
    street: Street;

    // Administrative Info
    @Column({ type: "int", default: 0 })
    average_patients_per_day: number;

    @Column({ type: "boolean", default: false })
    is_added_by_admin: boolean;

    // Work Time Info
    @Column({ type: 'varchar', nullable: false })
    favourite_time_opening: string;

    @Column({ type: 'varchar', nullable: false })
    favourite_time_closing: string;

    @Column({ type: 'varchar', nullable: false })
    first_work_time_opening: string;

    @Column({ type: 'varchar', nullable: false })
    first_work_time_closing: string;

    @Column({ type: 'varchar', nullable: false })
    second_work_time_opening: string;

    @Column({ type: 'varchar', nullable: false })
    second_work_time_closing: string;

    @Column({ type: "varchar", length: 50 })
    waiting_time: string;

    // Medical Info
    @Column({ type: "varchar", nullable: true })
    stance_on_dietary_supp: string;

    @Column({ type: "varchar", nullable: true })
    adopted_types: string;

    @Column({ type: "varchar", nullable: true })
    preffered_dietary_types: string;

    @Column({ type: "varchar", nullable: true })
    preffered_treatment_types: string;

    @Column({ type: "varchar", nullable: true })
    preffered_companies: string;

    // Personality Info
    @Column({ type: "varchar", nullable: true })
    personality_strengthens: string;

    @Column({ type: "varchar", nullable: true })
    interestes: string;

    @Column({ type: "varchar", nullable: true })
    competitive_types: string;

    @Column()
    personality_type: string;

    @Column()
    social_pattern: string;

    @Column()
    salesman_relationship: string;

    // Pharmacy Info
    @Column({ type: "varchar", nullable: true })
    pharmacy_description: string;

    @Column({ type: "varchar", nullable: true })
    pharmacy_name: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    assistant_full_name: string;

    // Relation to Company
    @Column({ type: "varchar", nullable: true })
    execute_prescription: string;

    @Column({ type: "varchar", nullable: true })
    doctor_relationship: string;

    @Column({ type: "varchar", nullable: true })
    average_sell_for_our_products: string;

    @Column({ type: "varchar", nullable: true })
    our_products_existance_percentage: string;

    @CreateDateColumn()
    created_at: Date;
}