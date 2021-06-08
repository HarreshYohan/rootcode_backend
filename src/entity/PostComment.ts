import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Post } from "./Post";

@Entity()
export class PostComment {

    @PrimaryGeneratedColumn()
    post_comment_id: number;

    @Column()
    comment: string;

    @Column()
    post_id: number;

}
