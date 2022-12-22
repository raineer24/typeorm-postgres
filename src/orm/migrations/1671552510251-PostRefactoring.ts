import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1590521920166 implements MigrationInterface {
  name = 'CreatePeople1671552510251';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "people"
      ("id" SERIAL NOT NULL,
         "username"      CHARACTER VARYING(40),
         "name"          CHARACTER VARYING(40),
         "email"         CHARACTER VARYING(100) NOT NULL,
         "password"      CHARACTER VARYING NOT NULL,
         "role"          CHARACTER VARYING(30) NOT NULL DEFAULT 'STANDARD',
         "language"      CHARACTER VARYING(15) NOT NULL DEFAULT 'en-US',
         "created_at"    TIMESTAMP NOT NULL DEFAULT Now(),
         "updated_at"    TIMESTAMP NOT NULL DEFAULT Now(),
         "is_ambassador" BOOLEAN)`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "people"`, undefined);
  }
}
