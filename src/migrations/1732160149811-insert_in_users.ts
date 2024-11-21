import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInUsers1732160149811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(
            `INSERT INTO Users (name, email, password_hash, is_admin) VALUES 
            ('Gabriel Alves', 'gabriel@example,com', 'hash_password0', TRUE),
            ('Alice Johnson', 'alice.johnson@example.com', 'hash_password1', FALSE),
            ('Bob Smith', 'bob.smith@example.com', 'hash_password2', FALSE),
            ('Charlie Brown', 'charlie.brown@example.com', 'hash_password3', FALSE),
            ('Daisy Miller', 'daisy.miller@example.com', 'hash_password4', FALSE),
            ('Ethan Davis', 'ethan.davis@example.com', 'hash_password5', FALSE),
            ('Fiona Clark', 'fiona.clark@example.com', 'hash_password6', FALSE),
            ('George Taylor', 'george.taylor@example.com', 'hash_password7', FALSE),
            ('Hannah Wilson', 'hannah.wilson@example.com', 'hash_password8', FALSE),
            ('Isabel Lewis', 'isabel.lewis@example.com', 'hash_password9', TRUE),
            ('Jack Walker', 'jack.walker@example.com', 'hash_password10', FALSE),
            ('Katherine Scott', 'katherine.scott@example.com', 'hash_password11', FALSE),
            ('Liam Harris', 'liam.harris@example.com', 'hash_password12', TRUE),
            ('Megan Lewis', 'megan.lewis@example.com', 'hash_password13', FALSE),
            ('Noah King', 'noah.king@example.com', 'hash_password14', TRUE)` 
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(
            `DELETE FROM users`
        )
    }

}
