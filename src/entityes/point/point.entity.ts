import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('points')
export class Point{
    @PrimaryGeneratedColumn()
    point_id: number;

    @Column()
    user_id: number;

    @Column()
    points: number;

    @Column()
    modified_by: number;

    @Column()
    modified_at: Date;

    @Column()
    expired_points: boolean;

    @Column()
    type_operation: string;
}