import { Area } from "src/area/entities/area.entity";
import { ROLE } from "src/auth/enums/role.enum";
import { Building } from "src/building/entities/building.entity";
import { City } from "src/city/entities/city.entity";
import { Governorate } from "src/governorate/entities/governorate.entity";
import { Street } from "src/street/entities/street.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Salesman {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    first_name: string;//first name of salesman

    @Column({ type: 'varchar', length: 255, nullable: false })
    last_name: string;//last name of salesman

    @Column({ type: 'varchar', length: 255, nullable: false })
    lat: string;//latitude of the place 

    @Column({ type: 'varchar', length: 255, nullable: false })
    lan: string;//langitude of the place 

    @Column({ type: 'varchar', length: 255, nullable: false })
    admin_description: string;

    @Column({ type: 'int', nullable: false, default: 0 })
    gender: number;

    //Assign assistant role to the assistant account directly
    @Column({ type: 'enum', enum: ROLE, nullable: false, default: ROLE.SALESMAN })
    role: ROLE;

    @Column({ type: 'varchar', length: 255, nullable: false })
    email: string;//email of salesman

    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;//password of salesman

    @Column({ type: 'int', nullable: true })
    leader_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    total_profit: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    sales_profit: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    team_profit: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    account_status_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    account_type_id: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    level: number;

    @Column({ type: 'varchar', length: 10, nullable: false })
    phone_number: string;//phone number of salesman

    @Column({ type: 'varchar', nullable: false })
    telephone_number: string;//phone number of salesman

    @Column({ type: 'datetime', nullable: false })
    birth_date: Date;//birth date of salesman 

    @Column({ type: 'datetime', nullable: false })
    last_login: Date;//account creating date 

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;//account creating date 

    @Column({ type: 'int', nullable: false })
    governorate_id: number;

    @Column({ type: 'int', nullable: false })
    city_id: number;

    @Column({ type: 'int', nullable: false })
    area_id: number;

    @Column({ type: 'int', nullable: false })
    street_id: number;

    //each Governorate has many salesmans in it 
    @ManyToOne(() => Governorate)
    @JoinColumn({ name: 'governorate_id' })
    governorate: Governorate;

    //each City has many salesmans in it 
    @ManyToOne(() => City)
    @JoinColumn({ name: 'city_id' })
    city: City;

    //each Area has many salesmans in it 
    @ManyToOne(() => Area)
    @JoinColumn({ name: 'area_id' })
    area: Area;

    //each Street has many salesmans in it 
    @ManyToOne(() => Street)
    @JoinColumn({ name: 'street_id' })
    street: Street;

    /*     //each Building has many salesmans in it 
        @ManyToOne(() => Building)
        @JoinColumn({ name: 'building_id' })
        building: Building; */

    //each Leader has many salesmans in his team 
    @ManyToOne(() => Salesman, { nullable: true })
    @JoinColumn({ name: 'leader_id' })
    leader: Salesman;

}
