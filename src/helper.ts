import { createConnection } from "typeorm"
import { Post } from "./entity/Post"
import { PostComment } from "./entity/PostComment"

export const createDbConnection = async ():Promise<void> => {
    await createConnection({
        type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT || '5432'),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities:[Post,PostComment],
    logging: process.env.POSTGRES_LOGGING === 'true',
    })
}