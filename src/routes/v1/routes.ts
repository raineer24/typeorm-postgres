import { Router } from 'express';

import { Register, Login, AuthenticatedUser, Logout, UpdateInfo, UpdatePassword } from 'controllers/customer';
import { Ambassadors } from 'controllers/user';
import { AuthMiddleware } from 'middleware/auth.middleware';

import { Links } from '../../controllers/links/Links';
import { Orders } from '../../controllers/orders/orders.controller';
import {
  Products,
  CreateProduct,
  GetProduct,
  UpdateProduct,
  DeleteProduct,
  ProductsFrontend,
} from '../../controllers/product/product.controller';

const router = Router();

router.post('/admin/register', Register);
router.post('/admin/login', Login);
router.get('/admin/user', AuthMiddleware, AuthenticatedUser);
router.post('/admin/logout', AuthMiddleware, Logout);
router.put('/admin/info', AuthMiddleware, UpdateInfo);
router.put('/admin/password', AuthMiddleware, UpdatePassword);
router.get('/admin/ambassadors', AuthMiddleware, Ambassadors);
router.get('/admin/products', AuthMiddleware, Products);
router.post('/admin/products', AuthMiddleware, CreateProduct);
router.get('/admin/products/:id', AuthMiddleware, GetProduct);
router.put('/admin/products/:id', AuthMiddleware, UpdateProduct);
router.delete('/admin/products/:id', AuthMiddleware, DeleteProduct);
router.get('/admin/:id/links', AuthMiddleware, Links);
router.get('/admin/orders', AuthMiddleware, Orders);

// Ambassador
router.post('/ambasaddor/register', Register);
router.post('/ambasaddor/login', Login);
router.get('/ambassador/user', AuthMiddleware, AuthenticatedUser);
router.post('/ambasaddor/logout', AuthMiddleware, Logout);
router.put('/ambasaddor/info', AuthMiddleware, UpdateInfo);
router.put('/ambasaddor/password', AuthMiddleware, UpdatePassword);

router.get('/api/ambassador/products/frontend', ProductsFrontend);

export default router;
