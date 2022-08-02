import { CreatePostInterface } from "../interfaces/post.interface";
import User from "../models/user.model";
import Post from "../models/post.model";

export default class PostService {

    public static async getPosts() {
        return new Promise((resolve, reject) => {
            Post.findAll({ include: [User] }).then((results:any) => {
                if(results === null) {
                    reject({ http_code: 404, reason: 'Posts not found.' });
                }
                resolve({ http_code: 200, results: results });
            })
            .catch((err:any) => {
                reject({ http_code: 500, reason: 'Sequelize ORM error.' });
            });
        });
    }

    public static async getPostById(postId: any) {
        return new Promise((resolve, reject) => {
            if(isNaN(postId)) {
                reject({ http_code: 400, reason: 'Invalid request params.'});
            }
            else {
                Post.findOne({ where: { id: postId }, include: [User] }).then((results:any) => {
                    if(results === null) {
                        reject({ http_code: 404, reason: 'Post not found.' });
                    }
                    resolve({ http_code: 200, results: results });
                })
                .catch((err:any) => {
                    reject({ http_code: 500, reason: 'Sequelize ORM error.' });
                });
            }
        }); 
    }

    public static async createPost(postBody: CreatePostInterface) {
        return new Promise((resolve, reject) => {
            Post.create(
            { 
                title: postBody.title, 
                content: postBody.content, 
                status: postBody.status, 
                author_id: postBody.author_id
            })
            .then((post: Post) => {
                resolve({ http_code: 201, results: post });
            })
            .catch((err:any) => {
                reject({ http_code: 500, reason: 'Sequelize ORM error.' });
            });
        }); 
    }

    public static async updatePost(postId: any, postBody: CreatePostInterface) {
        return new Promise((resolve, reject) => {
            if(isNaN(postId)) {
                reject({ http_code: 400, reason: 'Invalid request params.'});
            }
            else {
                Post.update(
                {
                    title: postBody.title, 
                    content: postBody.content, 
                    status: postBody.status, 
                    author_id: postBody.author_id
                }, 
                { 
                    where: { id: postId } 
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

    public static async deletePost(postId: any) {
        return new Promise((resolve, reject) => {
            if(isNaN(postId)) {
                reject({ http_code: 400, reason: 'Invalid request params.'});
            }
            else {
                Post.destroy({ where: { id: postId }}).then((rows: number) => {
                    if(!rows) {
                        reject({ http_code: 404, reason: 'Post not found.' });
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