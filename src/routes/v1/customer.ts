import { Router } from 'express';

import { Register, Login, AuthenticatedUser, Logout, UpdateInfo, UpdatePassword } from 'controllers/customer';
import { AuthMiddleware } from 'middleware/auth.middleware';

const router = Router();

router.post('/register', Register);
router.post('/login', Login);
router.get('/user', AuthMiddleware, AuthenticatedUser);
router.post('/logout', AuthMiddleware, Logout);
router.put('/info', AuthMiddleware, UpdateInfo);
router.put('/password', AuthMiddleware, UpdatePassword);

export default router;
