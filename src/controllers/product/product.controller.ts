import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { getApp } from '../../orm/dbCreateConnection';
import { Product } from '../../orm/entities/product/Product';

export const Products = async (req: Request, res: Response) => {
  res.send(await getRepository(Product).find());

};
