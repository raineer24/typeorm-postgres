// import { MigrationInterface, QueryRunner } from 'typeorm';

// export class linksOrder1673792789552 implements MigrationInterface {
//   name = 'CreateCustomerII1671552510258';
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(
//       `CREATE TABLE IF NOT EXISTS link
//         (
//            id SERIAL UNIQUE,
//            users_id INTEGER,
//            code CHARACTER VARYING(255) UNIQUE,
//            PRIMARY KEY (id, users_id),
//            FOREIGN KEY (users_id) REFERENCES customer (id),
//            UNIQUE (users_id))`,
//       undefined,
//     );
//     await queryRunner.query(
//       `CREATE TABLE IF NOT EXISTS link_products
//       (
//          link_id SERIAL UNIQUE,
//          product_id INTEGER,
//          FOREIGN KEY (link_id) REFERENCES link (id),
//          FOREIGN KEY (product_id) REFERENCES product (id))`,
//       undefined,
//     );

//     await queryRunner.query(
//       `CREATE TABLE IF NOT EXISTS orders
//           (
//              id               SERIAL NOT NULL UNIQUE,
//              transaction_id   CHARACTER VARYING(255),
//              user_id          INTEGER,
//              code             CHARACTER VARYING(100),
//              ambassador_email CHARACTER VARYING(255),
//              first_name       CHARACTER VARYING(255),
//              last_name        CHARACTER VARYING(255),
//              email           CHARACTER VARYING(255),
//              address          CHARACTER VARYING(255),
//              country          CHARACTER VARYING(255),
//              city             CHARACTER VARYING(255),
//              zip              CHARACTER VARYING(255),
//              complete         BOOLEAN,
//              created_at       TIMESTAMP WITH time zone NOT NULL DEFAULT Now(),
//              FOREIGN KEY (code) REFERENCES link (code))`,
//       undefined,
//     );
//     await queryRunner.query(
//       `CREATE TABLE IF NOT EXISTS order_item
//           (
//              id SERIAL UNIQUE,
//              order_id INTEGER,
//              product_title CHARACTER VARYING(255),
//              price INTEGER,
//              quantity INTEGER,
//              ambassador_revenue INTEGER,
//              admin_revenue INTEGER,
//              FOREIGN KEY (order_id) REFERENCES orders (id))`,
//       undefined,
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query(`DROP TABLE "order_item"`, undefined);
//     await queryRunner.query(`DROP TABLE "orders"`, undefined);
//     await queryRunner.query(`DROP TABLE "link_products"`, undefined);
//     await queryRunner.query(`DROP TABLE "link"`, undefined);
//   }
// }
