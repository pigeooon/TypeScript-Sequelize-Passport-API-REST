import { Request, Response } from 'express';
import { CreateUserInterface, UpdateUserInterface } from '../interfaces/user.interfaces';
import User from '../models/user.model';
import UserService from '../services/user.service';

export default class UserController {
    constructor() { }

    public getUsers(req: Request, res: Response): any {
        UserService.getUsers().then((resp:any) => {
            return res.status(resp.http_code).json(resp.results); 
        }).catch((err:any) => {
            return res.status(err.http_code).json(err.reason);
        });
    }

    public getUserById(req: Request, res: Response): any {
        let userId: number = Number(req.params.id);

        UserService.getUserById(userId).then((resp:any) => {
            return res.status(resp.http_code).json(resp.results); 
        }).catch((err:any) => {
            return res.status(err.http_code).json(err.reason);
        });
    }

    public createUser(req: Request, res: Response): any {
        let userBody: CreateUserInterface = req.body;

        UserService.createUser(userBody).then((resp:any) => {
            return res.status(resp.http_code).json(resp.results); 
        }).catch((err:any) => {
            return res.status(err.http_code).json(err.reason);
        });
    }

    public updateUser(req: Request, res: Response): any {
        let userId: number = Number(req.params.id);
        let user: UpdateUserInterface = req.body;

        UserService.updateUser(userId, user).then((resp:any) => {
            return res.status(resp.http_code).json(resp.results); 
        }).catch((err:any) => {
            return res.status(err.http_code).json(err.reason);
        });
    }

    public deleteUser(req: Request, res: Response): any {
        let userId: number = Number(req.params.id);

        UserService.deleteUser(userId).then((resp:any) => {
            return res.status(resp.http_code).json(resp.results); 
        }).catch((err:any) => {
            return res.status(err.http_code).json(err.reason);
        });
    }
}