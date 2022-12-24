import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1590521920166 implements MigrationInterface {
  name = 'CreateCustomer1671552510251';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "customer"
      ("id" SERIAL NOT NULL,
         "first_name"    CHARACTER VARYING(40),
         "last_name"     CHARACTER VARYING(40),
         "email"         CHARACTER VARYING(100) NOT NULL,
         "password"      CHARACTER VARYING NOT NULL,
         "is_ambassador" BOOLEAN)`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "customer"`, undefined);
  }
}
