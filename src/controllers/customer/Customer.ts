import bcryptjs from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
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

  res.send(user);
};
