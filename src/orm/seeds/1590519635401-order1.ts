import { randomInt } from 'crypto';

import bcryptjs from 'bcryptjs';
import * as faker from 'faker';
import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Customer } from 'orm/entities/customer/Customer';

import { Link } from '../../orm/entities/link/Link';
import { Order } from '../../orm/entities/orders/Orders';
import { OrderItem } from '../entities/order-item/Order-item';
export class SeedCustomers1590519635404 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const orderRepository = getRepository(Order);
    const orderItemRepository = getRepository(OrderItem);
    const linkRepository = getRepository(Link);

    const repository = getRepository(Customer);

    const password = await bcryptjs.hash('1234', 10);

    for (let i = 0; i < 30; i++) {
      await repository.save({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password,
        is_ambassador: true,
      });
    }

    for (let i = 0; i < 30; i++) {
      const customer = new Customer();
      customer.id = i + 1;
      await linkRepository.save({
        code: faker.random.alphaNumeric(6),
        customer,
        price: faker.commerce.price(),
      });
    }

    // for (let i = 0; i < 30; i++) {
    //   const order = await orderRepository.save({
    //     user_id: randomInt(2, 31),
    //     code: faker.random.alphaNumeric(6),
    //     ambassador_email: faker.internet.email(),
    //     first_name: faker.name.firstName(),
    //     last_name: faker.name.lastName(),
    //     email: faker.internet.email(),
    //     complete: true,
    //   });

    //   for (let j = 0; j < randomInt(1, 5); j++) {
    //     await orderItemRepository.save({
    //       order,
    //       product_title: faker.lorem.words(2),
    //       price: randomInt(2, 31),
    //       quantity: randomInt(2, 31),
    //       admin_revenue: randomInt(2, 31),
    //       ambassador_revenue: randomInt(2, 31),
    //     });
    //   }
    // }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
