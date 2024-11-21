import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateViewUserPoints1732159870409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(
            `CREATE OR REPLACE VIEW user_points AS
            SELECT 
                u.name AS user_name,
                u.user_id,
                COALESCE(SUM(CASE 
                    WHEN p.type_operation = 'sum' THEN p.points 
                    WHEN p.type_operation = 'reduce' THEN -p.points 
                    ELSE 0 
                END), 0) AS total_points
            FROM 
                users u
            LEFT JOIN 
                points p ON u.user_id = p.user_id AND p.expired_points = false
            GROUP BY 
                u.user_id;`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(
            `DROP VIEW user_points;`
        )
    }

}
