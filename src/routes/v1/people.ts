import { Router } from 'express';

import { Register } from 'controllers/people';

const router = Router();
export const routes = (router: Router) => {
  console.log('router');
  router.get('/register', Register);
};

router.post('/', Register);

export default router;
