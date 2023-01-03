import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Product } from '../../orm/entities/product/Product';

export const Products = async (req: Request, res: Response) => {
  res.send(await getRepository(Product).find());
};

export const CreateProduct = async (req: Request, res: Response) => {
  res.status(201).send(await getRepository(Product).save(req.body));
};
