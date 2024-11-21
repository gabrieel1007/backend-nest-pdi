import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInPoints1732160156325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(
            `INSERT INTO Points (user_id, points, modified_by, expired_points, type_operation) VALUES
            (1, 50, 1, FALSE, 'sum'),
            (2, 30, 1, FALSE, 'sum'),
            (3, 40, 1, FALSE, 'sum'),
            (4, 10, 1, FALSE, 'sum'),
            (5, 70, 1, FALSE, 'sum'),
            (6, 25, 1, FALSE, 'sum'),
            (7, 60, 1, FALSE, 'sum'),
            (8, 0, 1, TRUE, 'sum'),
            (9, 15, 1, FALSE, 'sum');`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(
            `DELETE FROM points`
        )
    }

}
