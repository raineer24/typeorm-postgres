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

    const is_ambassador = req.path.indexOf('ambassador/user') >= 0;
    console.log('auth middleware', req.path);
    console.log('isambassador', is_ambassador);

    const customer = await getRepository(Customer).findOne(payload.id);
    req['customer'] = customer;
    console.log(customer, 'customer');

    if ((is_ambassador && payload.scope !== 'ambassador') || (!is_ambassador && payload.scope !== 'admin')) {
      return res.status(401).send({
        message: 'unauthorized',
      });
    }

    next();
  } catch {
    return res.status(401).send({
      message: 'unauthenticated',
    });
  }
};
