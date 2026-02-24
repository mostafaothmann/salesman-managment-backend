import { City } from "src/city/entities/city.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Governorate {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar',length:255,nullable:true})
    name: string;//name of governorate

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @OneToMany(()=>City,city =>city.governorate)
    cities:City[];
}
