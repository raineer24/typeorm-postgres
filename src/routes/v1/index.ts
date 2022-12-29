import { Router } from 'express';

import auth from './auth';
import customer from './customer';
import users from './users';
const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/customer', customer);

export default router;
