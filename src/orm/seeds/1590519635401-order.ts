import { randomInt } from 'crypto';

import * as faker from 'faker';
import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Customer } from '../../orm/entities/customer/Customer';
import { Link } from '../../orm/entities/link/Link';
import { Order } from '../../orm/entities/orders/Orders';
import { OrderItem } from '../entities/order-item/Order-item';

export class SeedCustomers1590519635405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const linkRepository = getRepository(Link);

    for (let i = 0; i < 30; i++) {
      const customer = new Customer();
      customer.id = i + 1;
      await linkRepository.save({
        code: faker.random.alphaNumeric(6),
        customer,
        price: faker.commerce.price(),
      });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
