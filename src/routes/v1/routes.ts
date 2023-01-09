import { Router } from 'express';

import { Register, Login, AuthenticatedUser, Logout, UpdateInfo, UpdatePassword } from 'controllers/customer';
import { Ambassadors } from 'controllers/user';
import { AuthMiddleware } from 'middleware/auth.middleware';

import { Links } from '../../controllers/links/Links';
import {
  Products,
  CreateProduct,
  GetProduct,
  UpdateProduct,
  DeleteProduct,
} from '../../controllers/product/product.controller';

const router = Router();

router.post('/register', Register);
router.post('/login', Login);
router.get('/user', AuthMiddleware, AuthenticatedUser);
router.post('/logout', AuthMiddleware, Logout);
router.put('/info', AuthMiddleware, UpdateInfo);
router.put('/password', AuthMiddleware, UpdatePassword);
router.get('/ambassadors', AuthMiddleware, Ambassadors);
router.get('/products', AuthMiddleware, Products);
router.post('/products', AuthMiddleware, CreateProduct);
router.get('/products/:id', AuthMiddleware, GetProduct);
router.put('/products/:id', AuthMiddleware, UpdateProduct);
router.delete('/products/:id', AuthMiddleware, DeleteProduct);
router.get('/:id/links', AuthMiddleware, Links);
// Ambassador

export default router;
