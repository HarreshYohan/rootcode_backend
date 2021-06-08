import { NextFunction, Request, Response, Router } from "express";
import {createPost, createPostComment, getComments, getPost} from '../services/post.service';
import bodyParser = require("body-parser");
import { body } from "express-validator";

const postController = Router();

postController.post('/post',
async (req: Request , res: Response, next: NextFunction) =>{
    try{
        
        body('title').exists({checkFalsy:true}).withMessage('Missing value :title'),
        body('description').exists({checkFalsy:true}).withMessage('Missing value :description'),
        body('colour').exists({checkFalsy:true}).withMessage('Missing value :colour');
        const response = await createPost(req);
        res.json(response)
    }
    catch(err){
        console.log(`failed as ${err}`)
        next(err);
    }
})

postController.get('/post/:id?',
async (req: Request , res: Response, next: NextFunction) =>{
    try{
        const response = await getPost(req);
        res.json(response)
    }
    catch(err){
        console.log(`failed as ${err}`)
        next(err);
    }
})

postController.get('/comments/:id',
async (req: Request , res: Response, next: NextFunction) =>{
    try{
        const response = await getComments(req.params.id);
        res.json(response)
    }
    catch(err){
        console.log(`failed as ${err}`)
        next(err);
    }
}
)

postController.post('/comment',
async (req: Request , res: Response, next: NextFunction) =>{
    try{
        body('comment').exists({checkFalsy:true}).withMessage('Missing value :comment'),
        body('post_id').exists({checkFalsy:true}).withMessage('Missing value :post_id');
        const response = await createPostComment(req);
        res.json(response)
    }
    catch(err){
        console.log(`failed as ${err}`)
        next(err);
    }
})


export default postController;

