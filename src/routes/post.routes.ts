import { Router } from "express";
import PostController from "../controllers/post.controller";
import { createPostValidator } from "../middlewares/form-validators/create_post_validator";
import UserController from "../controllers/user.controller";

export default class PostRoutes {
    private path = '/posts';
    private router = Router();
    private postController = new PostController();
    private userController = new UserController();

    constructor() {
        this.createRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private createRoutes() {
        this.router.get(`${this.path}`, this.userController.isAuthenticated, this.postController.getPosts);

        this.router.get(`${this.path}/:id(\\d+)`, this.userController.isAuthenticated, this.postController.getPostById);

        this.router.post(`${this.path}`, this.userController.isAuthenticated, createPostValidator, this.postController.createPost);

        this.router.put(`${this.path}/:id(\\d+)`, this.userController.isAuthenticated, createPostValidator, this.postController.updatePost);

        this.router.delete(`${this.path}/:id(\\d+)`, this.userController.isAuthenticated, this.postController.deletePost);
    }
}