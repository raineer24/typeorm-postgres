import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { getRepository } from 'typeorm';

import { Customer } from 'orm/entities/customer/Customer';

// eslint-disable-next-line @typescript-eslint/ban-types
export const AuthMiddleware = async (req: Request, res: Response, next: Function) => {
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
    req['user'] = customer;

    next();
  } catch {
    return res.status(401).send({
      message: 'unauthenticated',
    });
  }
};
