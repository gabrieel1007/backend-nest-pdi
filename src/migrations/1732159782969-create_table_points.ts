import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablePoints1732159782969 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(
            `CREATE TABLE points (
                point_id serial primary key,
                user_id int references users(user_id),
                points int default 0,
                modified_by int references users(user_id),
                modified_at timestamp default current_timestamp,
                expired_points boolean default false,
                type_operation varchar(10) not null check (type_operation IN ('sum','reduce'))
            )`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(
            `DROP TABLE points;`
        )
    }
}
