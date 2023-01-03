import { Router } from 'express';

import auth from './auth';
import routes from './routes';
import users from './users';
const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/customer', routes);

export default router;
