import { Assistant } from './../../assistant/entities/assistant.entity';
import { Area } from "src/area/entities/area.entity";
import { Salesman } from "src/salesman/entities/salesman.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique('unique_salesman_area', ['salesman', 'area']) // prevents duplicates
export class SalesmanArea {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false, default: "normal" })
    status: string;//a status of how much the salesman did with the area

    @Column({ type: 'varchar', length: 255, nullable: false })
    note: string;//describes how the salesman did with this area


    @Column({ type: 'int', nullable: true })
    salesman_id: number;

    @Column({ type: 'int', nullable: true })
    area_id: number;

    @Column({ type: 'int', nullable: true })
    assistant_id: number;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;

    //each salesman has many salesmen
    @ManyToOne(() => Salesman)
    @JoinColumn({ name: 'salesman_id' })
    salesman: Salesman;

    //each area has many salesmen
    @ManyToOne(() => Area)
    @JoinColumn({ name: 'area_id' })
    area: Area;

    //each assistant has many salesmen
    @ManyToOne(() => Area)
    @JoinColumn({ name: 'assistant_id' })
    Assistant: Assistant;

}
