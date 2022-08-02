import { Router } from 'express';
import UserRoutes from './user.routes';
import PostRoutes from './post.routes';

const router = Router();
const userRouter = new UserRoutes();
const postRouter = new PostRoutes();

router.use('/', userRouter.getRouter());
router.use('/', postRouter.getRouter());

export default router;