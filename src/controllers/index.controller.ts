import express = require("express");
import postController from './postController'
export default (app: express.Application): void => {
    app.use(postController);
    }