import { IsEnum } from "class-validator";
import { ROLE } from "src/auth/enums/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    username: string;

    @Column({ type: 'enum', enum: ROLE, nullable: false, default: ROLE.ADMIN })
    role: ROLE.ADMIN;

    @Column({ type: 'varchar', length: 255, nullable: false })
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;

}
