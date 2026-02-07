import { Doctor } from "src/doctor/entities/doctor.entity";
import { Pharmacist } from "src/pharmacist/entities/pharmacist.entity";
import { Salesman } from "src/salesman/entities/salesman.entity";
import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DoctorVisit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    photo: string;//photo of the visiting document with either the signature or the stamp on it

    @Column({ type: 'varchar', length: 255, nullable: false, default: "لا شيء" })
    note: string;//note on how the doctor treated the salesman 

    @Column({ type: 'varchar', length: 255, nullable: true })
    closest_pharmacy: string;//the closest pharmacy to the doctor to be added by the admin after that 

    @Column({ type: 'datetime', nullable: false })
    validated_at: Date;//time on it the assistant validated the visit

    @Column({ type: 'int', nullable: false })
    number_of_patients: number;//number of patients that were in the clinic

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;//time on it the salesman submitted the visit to be comitted

    //each Type has many visits 
    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    Type: Type;
    //each Doctor has many visits 
    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctor_id' })
    Building: Doctor;

    //each Salesman has many visits 
    @ManyToOne(() => Salesman)
    @JoinColumn({ name: 'salesman_id' })
    Salesman: Salesman;

}
