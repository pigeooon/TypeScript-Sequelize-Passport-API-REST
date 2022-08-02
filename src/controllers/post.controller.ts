import { Request, Response } from 'express';
import { CreatePostInterface } from '../interfaces/post.interface';
import PostService from '../services/post.service';

export default class PostController {
    constructor() { }

    public getPosts(req: Request, res: Response): any {
        PostService.getPosts().then((resp:any) => {
            return res.status(resp.http_code).json(resp.results); 
        }).catch((err:any) => {
            return res.status(err.http_code).json(err.reason);
        });
    }

    public getPostById(req: Request, res: Response): any {
        let postId: number = Number(req.params.id);

        PostService.getPostById(postId).then((resp:any) => {
            return res.status(resp.http_code).json(resp.results); 
        }).catch((err:any) => {
            return res.status(err.http_code).json(err.reason);
        });
    }

    public createPost(req: Request, res: Response): any {
        let postBody: CreatePostInterface = req.body;

        PostService.createPost(postBody).then((resp:any) => {
            return res.status(resp.http_code).json(resp.results); 
        }).catch((err:any) => {
            return res.status(err.http_code).json(err.reason);
        });
    }

    public updatePost(req: Request, res: Response): any {
        let postId: number = Number(req.params.id);
        let post: CreatePostInterface = req.body;

        PostService.updatePost(postId, post).then((resp:any) => {
            return res.status(resp.http_code).json(resp.results); 
        }).catch((err:any) => {
            return res.status(err.http_code).json(err.reason);
        });
    }

    public deletePost(req: Request, res: Response): any {
        let postId: number = Number(req.params.id);

        PostService.deletePost(postId).then((resp:any) => {
            return res.status(resp.http_code).json(resp.results); 
        }).catch((err:any) => {
            return res.status(err.http_code).json(err.reason);
        });
    }
}