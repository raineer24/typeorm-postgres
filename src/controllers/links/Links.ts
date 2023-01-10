import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Link } from '../../orm/entities/link/Link';

export const Links = async (req: Request, res: Response) => {
  const links = await getRepository(Link).find({
    where: {
      customer: req.params.id,
    },
  });
  res.send(links);
};
