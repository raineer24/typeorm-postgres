import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Customer } from 'orm/entities/customer/Customer';

export class SeedCustomersii1590519635402 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new Customer();
    const userRepository = getRepository(Customer);

    user.first_name = 'Heisenberg';
    user.last_name = 'Walter White';
    user.email = 'admin@admin.com';
    user.password = 'pass1';
    user.is_ambassador = true;

    await userRepository.save(user);

    user = new Customer();
    user.first_name = 'Jesse';
    user.last_name = 'Jesse Pinkman';
    user.email = 'standard@standard.com';
    user.password = 'pass1';
    user.is_ambassador = true;

    await userRepository.save(user);

    user = new Customer();
    user.first_name = 'Sky';
    user.last_name = 'Skyler White';
    user.email = 'skyler.white@test.com';
    user.password = 'pass1';
    user.is_ambassador = true;

    await userRepository.save(user);

    user = new Customer();
    user.first_name = 'Hank';
    user.last_name = 'Hank Schrader';
    user.email = 'hank.schrader@test.com';
    user.password = 'pass1';
    user.is_ambassador = true;

    await userRepository.save(user);

    user = new Customer();
    user.first_name = 'Marie';
    user.last_name = 'Marie Schrader';
    user.email = 'marie.schrader@test.com';
    user.password = 'pass1';
    user.is_ambassador = true;

    await userRepository.save(user);

    user = new Customer();
    user.first_name = 'The Lawyer';
    user.last_name = 'Saul Goodman';
    user.email = 'saul.goodman@test.com';
    user.password = 'pass1';
    user.is_ambassador = true;

    await userRepository.save(user);

    user = new Customer();
    user.first_name = 'Gus';
    user.last_name = 'Gustavo Fring';
    user.email = 'gustavo.fring@test.com';
    user.password = 'pass1';
    user.is_ambassador = true;

    await userRepository.save(user);

    user = new Customer();
    user.first_name = 'Mike';
    user.last_name = 'Michael Ehrmantraut';
    user.email = 'michael.ehrmantraut@test.com';
    user.password = 'pass1';
    user.is_ambassador = true;

    await userRepository.save(user);

    user = new Customer();
    user.first_name = 'Tio';
    user.last_name = 'Hector Salamanca';
    user.email = 'hector.salamanca@test.com';
    user.password = 'pass1';
    user.is_ambassador = true;

    await userRepository.save(user);

    user = new Customer();
    user.first_name = 'Tuco';
    user.last_name = 'Alberto Salamanca';
    user.email = 'alberto.salamanca@test.com';
    user.password = 'pass1';
    user.is_ambassador = true;

    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
