import { Router } from 'express';

import { Register, Login, AuthenticatedUser } from 'controllers/customer';

const router = Router();

router.post('/register', Register);
router.post('/login', Login);
router.post('/user', AuthenticatedUser);

export default router;
