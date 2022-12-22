import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { People } from 'orm/entities/people/People';

export const Register = async (req: Request, res: Response) => {
  console.log('working');
  res.send(req.body);
};
