import "dotenv/config"
import {configExpress, mongoDBConfig } from "./src/config/config"
import { AppExpress } from "./src/POO/express/";
import { MongoDB } from "./src/POO/mongoose/index";
import { Server } from "./src/controllers/index";
import express from "express"
import path from "path"

(async () => {

    const db_mongo = new MongoDB(mongoDBConfig)
    await db_mongo.connect()
})();
const app = new AppExpress(configExpress, Server)
app.initializateMiddlewares()
console.log(__dirname)
app.addMiddleware(express.static(path.join(__dirname, "public")))
app.initializateControllers()
app.listen()