import { Router } from 'express';

import { Register, Login, AuthenticatedUser, Logout } from 'controllers/customer';

const router = Router();

router.post('/register', Register);
router.post('/login', Login);
router.get('/user', AuthenticatedUser);
router.post('/logout', Logout);

export default router;
