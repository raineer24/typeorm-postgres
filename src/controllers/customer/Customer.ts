import bcryptjs from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import { sign, verify } from 'jsonwebtoken';
import { getRepository } from 'typeorm';

import { Customer } from 'orm/entities/customer/Customer';

export const Register = async (req: Request, res: Response) => {
  const { password, password_confirm, ...body } = req.body;

  if (password !== password_confirm) {
    return res.status(400).send({ message: "Password's do not match!" });
  }

  const user = await getRepository(Customer).save({
    ...body,
    password: await bcryptjs.hash(password, 10),
    is_ambassador: false,
  });

  delete user.password;

  res.send(user);
};

export const Login = async (req: Request, res: Response) => {
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

  const token = sign(
    {
      id: customer.id,
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
  try {
    const jwt = req.cookies['jwt'];
    console.log('auth');

    const payload: any = verify(jwt, process.env.JWT_SECRET);
    console.log('payload', payload);

    if (!payload) {
      return res.status(401).send({
        message: 'unauthenticated',
      });
    }

    const customer = await getRepository(Customer).findOne(payload.id);

    res.send(customer);
  } catch {
    return res.status(401).send({
      message: 'unauthenticated',
    });
  }
};

export const Logout = async (req: Request, res: Response) => {
  res.cookie('jwt', '', { maxAge: 0 });

  res.send({ message: 'success' });
};
