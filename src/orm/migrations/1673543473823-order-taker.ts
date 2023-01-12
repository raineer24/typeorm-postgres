import { MigrationInterface, QueryRunner } from 'typeorm';

export class orderTaker1673543473823 implements MigrationInterface {
  name = 'CreateCustomerII1671552510256';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS orders
        (
           id               SERIAL NOT NULL UNIQUE,
           transaction_id   CHARACTER VARYING(255),
           user_id          INTEGER,
           code             CHARACTER VARYING(100),
           ambassador_email CHARACTER VARYING(255),
           first_name       CHARACTER VARYING(255),
           last_name        CHARACTER VARYING(255),
           email           CHARACTER VARYING(255),
           address          CHARACTER VARYING(255),
           country          CHARACTER VARYING(255),
           city             CHARACTER VARYING(255),
           zip              CHARACTER VARYING(255),
           complete         SMALLINT,
           created_at       TIMESTAMP WITH time zone NOT NULL DEFAULT Now())`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS order_item
        (
           id SERIAL UNIQUE,
           order_id INTEGER,
           product_title CHARACTER VARYING(255),
           price INTEGER,
           quantity INTEGER,
           ambassador_revenue INTEGER,
           FOREIGN KEY (order_id) REFERENCES orders (id))`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "order"`, undefined);
    await queryRunner.query(`DROP TABLE "order_item"`, undefined);
  }
}
