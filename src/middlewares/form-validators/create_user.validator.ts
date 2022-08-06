import { NextFunction, Request, Response } from "express";
import { body, CustomValidator, validationResult } from "express-validator";
import User from "../../models/user.model";

const checkIfRutExists: CustomValidator = async value => {
    await User.findOne({ where: { rut: value }, attributes: ['rut'] }).then((user:any) => {
        if(user) {
            return Promise.reject('El rut introducido ya existe.');  
        }
    });
};

const checkIfEmailExists: CustomValidator = async value => {
    await User.findOne({ where: { email: value }, attributes: ['email'] }).then((user:any) => {
        if(user) {
            return Promise.reject('El correo electrónico introducido ya existe.');  
        }
    });
};

const checkConfirmPassword: CustomValidator = (value, { req }) => {
    if(value !== req.body.password) {
        return Promise.reject('Las contraseñas introducidas no coinciden.');  
    }
    return true;
};

export const createUserFormValidator = [
    body('first_name').notEmpty(),
    body('last_name').notEmpty(),
    body('rut').notEmpty().custom(checkIfRutExists),
    body('email').notEmpty().custom(checkIfEmailExists),
    body('password').notEmpty().isStrongPassword().withMessage('No es una contraseña segura.'),
    body('confirm_password').notEmpty().custom(checkConfirmPassword),

    async (req: Request, res: Response, next: NextFunction) => {
        const errors: any = validationResult(req);

        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });

        next();
    }
]