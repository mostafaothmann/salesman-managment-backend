import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Association {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    phone_number: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    telephone_number: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    country: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

}
