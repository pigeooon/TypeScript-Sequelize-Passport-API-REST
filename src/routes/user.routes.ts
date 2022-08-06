import { Router } from "express";
import UserController from "../controllers/user.controller";
import { loginUserFormValidator } from "../middlewares/form-validators/login_user.validator";

export default class UserRoutes {
    private path = '/users';
    private router = Router();
    private userController = new UserController();

    constructor() {
        this.createRoutes();
    }

    public getRouter(): Router {
        return this.router;
    }

    private createRoutes() {
        this.router.post(`${this.path}/login`, loginUserFormValidator, this.userController.signIn);
        
        this.router.post(`${this.path}/register`, this.userController.signUp);
    }
}