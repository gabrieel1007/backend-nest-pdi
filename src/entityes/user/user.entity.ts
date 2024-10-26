import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password_hash: string;

    @Column()
    is_admin: boolean;

    @Column()
    created_at: Date;
}