import { Request, Response, NextFunction } from 'express';

export const Register = (req: Request, res: Response) => {
  console.log('working');
  res.send(req.body);
};
