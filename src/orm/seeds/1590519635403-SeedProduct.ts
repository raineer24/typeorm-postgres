import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Product } from 'orm/entities/product/Product';

export class SeedProduct1590519635403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let product = new Product();
    const productRepository = getRepository(Product);

    product.title = 'tshirt';
    product.description = 'tee fit';
    product.image = '213fa1t3.jpeg';
    product.price = 190;

    await productRepository.save(product);

    product = new Product();
    product.title = 'Coffee Mug';
    product.description = 'hot n cold';
    product.image = '213f783a1t3.jpeg';
    product.price = 252;

    await productRepository.save(product);

    product = new Product();
    product.title = 'Oppo 264';
    product.description = 'Cellphone';
    product.image = '2136098fa1t3.jpeg';
    product.price = 6102;

    await productRepository.save(product);

    product = new Product();
    product.title = 'Wall clock';
    product.description = 'Wooden display';
    product.image = '21364987098fa1t3.jpeg';
    product.price = 1502;

    await productRepository.save(product);

    product = new Product();
    product.title = 'Lamp shade ';
    product.description = 'Aircooler';
    product.image = '213605198fa1t3.jpeg';
    product.price = 602;

    await productRepository.save(product);

    product = new Product();
    product.title = 'Vape';
    product.description = 'fruit salad';
    product.image = '2136098f2a1t3.jpeg';
    product.price = 3617;

    await productRepository.save(product);

    product = new Product();
    product.title = 'SHOYOROLL';
    product.description = 'Kimono';
    product.image = '21360981fa1t3.jpeg';
    product.price = 11252;

    await productRepository.save(product);

    product = new Product();
    product.title = 'Amazfit T-rex pro';
    product.description = 'Smart watch';
    product.image = '21331126098fa1t3.jpeg';
    product.price = 7153;

    await productRepository.save(product);

    product = new Product();
    product.title = 'Gatorade';
    product.description = 'sports drink';
    product.image = '21134686098fa1t3.jpeg';
    product.price = 87;

    await productRepository.save(product);

    product = new Product();
    product.title = 'Smoothie';
    product.description = 'shake mango';
    product.image = '21360984u8fa1t3.jpeg';
    product.price = 122;

    await productRepository.save(product);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
