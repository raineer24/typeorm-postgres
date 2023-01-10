import * as faker from 'faker';
import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Customer } from 'orm/entities/customer/Customer';

import { Link } from '../../orm/entities/link/Link';
export class SeedCustomers1590519635404 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const linkRepository = getRepository(Link);

    for (let i = 0; i < 30; i++) {
      await linkRepository.save({
        code: faker.random.alphaNumeric(6),
      });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
