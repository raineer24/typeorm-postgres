import { Router } from 'express';

import { Register } from 'controllers/customer';

const router = Router();

router.post('/register', Register);

export default router;
