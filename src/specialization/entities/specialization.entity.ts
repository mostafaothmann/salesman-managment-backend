import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialization {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

}
