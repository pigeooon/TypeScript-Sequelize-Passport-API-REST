import { NextFunction, Request, Response } from "express";
import { body, Result, ValidationError, validationResult } from "express-validator";

export const loginUserValidator = [
    body('email').notEmpty().isEmail(),
    body('password').notEmpty(),

    async (req: Request, res: Response, next: NextFunction) => {
        const errors: Result<ValidationError> = validationResult(req);

        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });

        next();
    }
]