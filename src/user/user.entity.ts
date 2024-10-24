import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar',  nullable: false })
    name: string;
    
    @Column({ default: false, nullable: false })
    is_admin: boolean;
    
    @Column({ nullable: false })
    points: number;
}