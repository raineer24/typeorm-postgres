import { MigrationInterface, QueryRunner } from 'typeorm';

export class linksOrder1673792789552 implements MigrationInterface {
  name = 'CreateCustomerII1671552510257';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "order_item"`, undefined);
    await queryRunner.query(`DROP TABLE "orders"`, undefined);
    await queryRunner.query(`DROP TABLE "link_products"`, undefined);
    await queryRunner.query(`DROP TABLE "link"`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "order_item"`, undefined);
    await queryRunner.query(`DROP TABLE "orders"`, undefined);
    await queryRunner.query(`DROP TABLE "link_products"`, undefined);
    await queryRunner.query(`DROP TABLE "link"`, undefined);
  }
}
