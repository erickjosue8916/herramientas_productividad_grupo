import "dotenv/config"
import {configExpress, mongoDBConfig } from "./config/config"
import { AppExpress } from "./POO/express/";
import { MongoDB } from "./POO/mongoose/index";
import { Server } from "./controllers/index";

(async () => {

    const db_mongo = new MongoDB(mongoDBConfig)
    await db_mongo.connect()
})();
const app = new AppExpress(configExpress, Server)
app.listen()