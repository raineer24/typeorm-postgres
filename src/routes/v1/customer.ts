import { Router } from 'express';

import { Register, Login } from 'controllers/customer';

const router = Router();

router.post('/register', Register);
router.post('/login', Login);

export default router;
