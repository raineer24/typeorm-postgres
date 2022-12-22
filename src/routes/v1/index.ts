import { Router } from 'express';

import auth from './auth';
import people from './people';
import users from './users';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/people', people);

export default router;
