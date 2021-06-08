import bodyParser = require("body-parser");
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";
import { PostComment } from "../entity/PostComment";


export const createPost = async (req): Promise<any> => {
    console.log("Creating a new post...");
    
    const post = new Post();
    post.title = req.body.title;
    post.description = req.body.description;
    post.colour = req.body.colour;
    await getRepository(Post).save(post);
    return post;
}

export const getPost = async (req): Promise<any> => {
    console.log("fetching new post...");
    if(req.params.id){
        return await getRepository(Post).find({
            where:{ post_id: req.params.id } },
        )}
    else{
        return await getRepository(Post).find()
    }
}

export const getComments = async(id): Promise<any> => {
    return await getRepository(PostComment).find({
        where:{ post_id: id } },
    )
}

export const createPostComment = async (req): Promise<any> => {
    console.log("Creating a new Comment for the post...");
    const postComment = new PostComment();
    postComment.comment = req.body.comment;
    postComment.post_id = req.body.post_id;
    await getRepository(PostComment).save(postComment);
    return postComment;
}