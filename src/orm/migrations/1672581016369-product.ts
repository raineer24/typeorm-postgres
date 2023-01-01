import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1590521920166 implements MigrationInterface {
  name = 'CreateCustomerII1671552510253';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product"
      (
         "id"          SERIAL NOT NULL,
         "title"       CHARACTER VARYING(40),
         "description" CHARACTER VARYING(40),
         "image"       CHARACTER VARYING(255) NOT NULL,
         "price"       INT NOT NULL)`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "product"`, undefined);
  }
}
