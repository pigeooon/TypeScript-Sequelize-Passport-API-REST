import { CreateUserInterface, UpdateUserInterface } from "../interfaces/user.interface";
import Role from "../models/role.model";
import User from "../models/user.model";

export default class UserService {

    public static async getUsers() {
        return new Promise((resolve, reject) => {
            User.findAll({ include: [Role] }).then((results:any) => {
                if(results === null) {
                    reject({ http_code: 404, reason: 'Users not found.' });
                }
                resolve({ http_code: 200, results: results });
            })
            .catch((err:any) => {
                reject({ http_code: 500, reason: 'Sequelize ORM error.' });
            });
        });
    }

    public static async getUserById(userId: any) {
        return new Promise((resolve, reject) => {
            if(isNaN(userId)) {
                reject({ http_code: 400, reason: 'Invalid request params.'});
            }
            else {
                User.findOne({ where: { id: userId }, include: [Role] }).then((results:any) => {
                    if(results === null) {
                        reject({ http_code: 404, reason: 'User not found.' });
                    }
                    resolve({ http_code: 200, results: results });
                })
                .catch((err:any) => {
                    reject({ http_code: 500, reason: 'Sequelize ORM error.' });
                });
            }
        }); 
    }

    public static async createUser(userBody: CreateUserInterface) {
        return new Promise((resolve, reject) => {
            User.create(
            { 
                first_name: userBody.first_name, 
                last_name: userBody.last_name, 
                rut: userBody.rut, email: 
                userBody.email, 
                password: userBody.password, 
            })
            .then((user: User) => {
                resolve({ http_code: 201, results: user });
            })
            .catch((err:any) => {
                reject({ http_code: 500, reason: 'Sequelize ORM error.' });
            });
        }); 
    }

    public static async updateUser(userId: any, userBody: UpdateUserInterface) {
        return new Promise((resolve, reject) => {
            if(isNaN(userId)) {
                reject({ http_code: 400, reason: 'Invalid request params.'});
            }
            else {
                User.update(
                {
                    first_name: userBody.first_name, 
                    last_name: userBody.last_name, 
                    rut: userBody.rut, email: 
                    userBody.email, 
                    password: userBody.password
                }, 
                { 
                    where: { id: userId } 
                })
                .then((results: any) => {
                    resolve({ http_code: 200, results: results[0] });
                })
                .catch((err:any) => {
                    reject({ http_code: 500, reason: 'Sequelize ORM error.' });
                });
            }
        }); 
    }

    public static async deleteUser(userId: any) {
        return new Promise((resolve, reject) => {
            if(isNaN(userId)) {
                reject({ http_code: 400, reason: 'Invalid request params.'});
            }
            else {
                User.destroy({ where: { id: userId }}).then((rows: number) => {
                    if(!rows) {
                        reject({ http_code: 404, reason: 'User not found.' });
                    }
                    resolve({ http_code: 205, results: rows });
                })
                .catch((err:any) => {
                    reject({ http_code: 500, reason: 'Sequelize ORM error.' });
                });
            }
        }); 
    }
}