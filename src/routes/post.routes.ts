import { Router } from "express";
import PostController from "../controllers/post.controller";
import { createPostValidator } from "../middlewares/form-validators/create_post_validator";

export default class PostRoutes {
    private path = '/posts';
    private router = Router();
    private postController = new PostController();

    constructor() {
        this.createRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private createRoutes() {
        this.router.get(`${this.path}`, this.postController.getPosts);

        this.router.get(`${this.path}/:id(\\d+)`, this.postController.getPostById);

        this.router.post(`${this.path}`, createPostValidator, this.postController.createPost);

        this.router.put(`${this.path}/:id(\\d+)`, createPostValidator, this.postController.updatePost);

        this.router.delete(`${this.path}/:id(\\d+)`, this.postController.deletePost);
    }
}