import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Customer } from 'orm/entities/customer/Customer';

export const Ambassadors = async (req: Request, res: Response) => {
  res.send(
    await getRepository(Customer).find({
      is_ambassador: true,
    }),
  );
};
