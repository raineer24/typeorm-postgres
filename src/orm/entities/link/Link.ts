import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Customer } from '../customer/Customer';
import { Order } from '../orders/Orders';
import { Product } from '../product/Product';

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'users_id' })
  customer: Customer;

  @ManyToMany(() => Product)
  @JoinTable({
    name: 'link_products',
    joinColumn: { name: 'link_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id' },
  })
  products: Product[];

  @OneToMany(() => Order, (order) => order.link, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({
    referencedColumnName: 'code',
    name: 'code',
  })
  orders: Order[];
}
