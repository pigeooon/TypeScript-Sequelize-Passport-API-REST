import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { IVerifyOptions } from 'passport-local';
import * as jwt from "jsonwebtoken";
import 'dotenv/config';
import User from '../models/user.model';

export default class UserController {
    constructor() { }

    public signIn(req: Request, res: Response) {
        passport.authenticate('local', (err: Error, user: User | null, info: IVerifyOptions) => {
            if(err) {
                return res.status(500).json({ message: 'Passport internal error.' });
            }
            if(!user) {
                return res.status(401).json({ message: info.message });
            }
            const token = jwt.sign({ id: user.id }, String(process.env.API_SECRET_KEY), {
                expiresIn: "8h"
            });
            return res.status(200).json({ accessToken: token });
        })(req, res);
    }

    public isAuthenticated(req: Request, res: Response, next: NextFunction) {
        passport.authenticate('jwt', (err: Error, user: User | null, info: IVerifyOptions) => {
            if(err) {
                return res.status(500).json({ message: 'Passport internal error.' });
            }
            if(!user) {
                return res.status(401).json({ message: 'Invalid token.' });
            }
            return next();
        })(req, res, next);
    }

    public signUp() {
    }
}