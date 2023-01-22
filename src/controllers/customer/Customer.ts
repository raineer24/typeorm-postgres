import bcryptjs from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import { sign, verify } from 'jsonwebtoken';
import { getRepository } from 'typeorm';

import { Customer } from 'orm/entities/customer/Customer';
import { Order } from 'orm/entities/orders/Orders';

export const Register = async (req: Request, res: Response) => {
  const { password, password_confirm, ...body } = req.body;

  if (password !== password_confirm) {
    return res.status(400).send({ message: "Password's do not match!" });
  }

  const user = await getRepository(Customer).save({
    ...body,
    password: await bcryptjs.hash(password, 10),
    is_ambassador: req.path === '/ambasaddor/register',
  });

  console.log('user', req.path);

  delete user.password;

  res.send(user);
};

export const Login = async (req: Request, res: Response) => {
  console.log('yawa');
  const customer = await getRepository(Customer).findOne(
    { email: req.body.email },
    {
      select: ['id', 'password', 'is_ambassador'],
    },
  );

  if (!customer) {
    return res.status(400).send({
      message: 'invalid credentials',
    });
  }

  if (!(await bcryptjs.compare(req.body.password, customer.password))) {
    console.log('customer', customer);
    return res.status(400).send({
      message: 'invalid credentials!',
    });
  }

  const adminLogin = req.path === '/customer/login';

  if (customer.is_ambassador && adminLogin) {
    return res.status(400).send({
      message: 'unauthorized',
    });
  }

  const token = sign(
    {
      id: customer.id,
      scope: adminLogin ? 'admin' : 'ambassador',
    },
    process.env.JWT_SECRET,
  );

  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, //1 DAY
  });

  res.send({
    message: 'success',
  });
};

export const AuthenticatedUser = async (req: Request, res: Response) => {
  const user = req['customer'];
  if (req.path === 'customer/admin/user') {
    return res.send(user);
  }
  console.log('req path', req.path);
  console.log('user id', user);

  const orders = await getRepository(Order).find({
    where: {
      user_id: user.id,
      complete: true,
    },
    relations: ['order_items'],
  });
  // eslint-disable-next-line no-array-reduce/no-reduce
  user.revenue = orders.reduce((s, o) => s + o.ambassador_revenue, 0);
  console.log('user revenue', user);
  res.send(user);
};

export const Logout = async (req: Request, res: Response) => {
  res.cookie('jwt', '', { maxAge: 0 });

  res.send({ message: 'success' });
};

export const UpdateInfo = async (req: Request, res: Response) => {
  const user = req['user'];

  const repository = getRepository(Customer);

  await repository.update(user.id, req.body);

  res.send(await repository.findOne(user.id));
};

export const UpdatePassword = async (req: Request, res: Response) => {
  const user = req['user'];

  if (req.body.password !== req.body.password_confirm) {
    return res.status(400).send({ message: "Password's do not match!" });
  }

  await getRepository(Customer).update(user.id, {
    password: await bcryptjs.hash(req.body.password, 10),
  });

  res.send(user);
};
