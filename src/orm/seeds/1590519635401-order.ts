import { randomInt } from 'crypto';

import * as faker from 'faker';
import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Order } from '../../orm/entities/orders/Orders';
import { OrderItem } from '../entities/order-item/Order-item';

export class SeedCustomers1590519635405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const orderRepository = getRepository(Order);
    const orderItemRepository = getRepository(OrderItem);

    for (let i = 0; i < 30; i++) {
      const order = await orderRepository.save({
        user_id: randomInt(2, 31),
        code: faker.random.alphaNumeric(6),
        ambassador_email: faker.internet.email(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName();
        email: faker.internet.email(),
        complete: true
      });

      for (let j = 0; j < randomInt(1, 5); j++) {
        await orderItemRepository.save({
          order,
          product_title: faker.lorem.words(2),
          price: randomInt(2, 31),
          quantity: randomInt(2, 31),
          admin_revenue: randomInt(2, 31),
          ambassador_revenue: randomInt(2, 31),
        });
      }
    }

    
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
