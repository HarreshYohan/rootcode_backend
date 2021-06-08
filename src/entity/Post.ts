import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne} from "typeorm";
import  {PostComment} from "./PostComment";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    post_id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    colour: string;

    @OneToMany(
        () => PostComment,
        postComment => postComment.post_id,
      )
      comments: PostComment[]     

}
