import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1590521920166 implements MigrationInterface {
  name = 'CreateCustomerII1671552510255';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "customer"
      ("id" SERIAL NOT NULL UNIQUE,
         "first_name"    CHARACTER VARYING(40),
         "last_name"     CHARACTER VARYING(40),
         "email"         CHARACTER VARYING(100) NOT NULL,
         "password"      CHARACTER VARYING NOT NULL,
         "is_ambassador" BOOLEAN)`,
      undefined,
    );

    await queryRunner.query(
      `CREATE TABLE "product"
      (
         "id"          SERIAL NOT NULL UNIQUE,
         "title"       CHARACTER VARYING(40),
         "description" CHARACTER VARYING(40),
         "image"       CHARACTER VARYING(255) NOT NULL,
         "price"       INT NOT NULL)`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS link
      (
         id SERIAL UNIQUE,
         users_id INTEGER,
         code     CHARACTER VARYING(255),
         PRIMARY KEY (id, users_id),
         FOREIGN KEY (users_id) REFERENCES customer (id),
         UNIQUE(users_id))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS link_products
    (
       link_id SERIAL UNIQUE,
       product_id INTEGER,
       FOREIGN KEY (link_id) REFERENCES link (id),
       FOREIGN KEY (product_id) REFERENCES product (id))`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "link"`, undefined);
    await queryRunner.query(`DROP TABLE "link_products"`, undefined);
    await queryRunner.query(`DROP TABLE "order"`, undefined);
    await queryRunner.query(`DROP TABLE "order_item"`, undefined);
  }
}
