import { Router } from 'express';
import UserRoutes from './user.routes';

const router = Router();
const userRouter = new UserRoutes();

router.use('/', userRouter.getRouter());

export default router;