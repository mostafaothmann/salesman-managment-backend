import { Type } from "src/type/entities/type.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GroupType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    description: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    @OneToMany(() => Type, type => type.groupType)
    types: Type[];
    
}
