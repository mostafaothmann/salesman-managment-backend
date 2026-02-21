import { Area } from "src/area/entities/area.entity";
import { Building } from "src/building/entities/building.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Street {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

    @Column({ type: 'int', nullable: false })
    area_id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each Area has streets in it 
    @ManyToOne(() => Area)
    @JoinColumn({ name: 'area_id' })
    area: Area;

    @OneToMany(() => Building, building => building.street)
    buildings: Building;

}
