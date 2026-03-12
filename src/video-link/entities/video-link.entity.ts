import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VideoLink {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    link: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    description: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;


}
