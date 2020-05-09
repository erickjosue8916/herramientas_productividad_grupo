import express from  "express";
import morgan from "morgan";
import ExpressConfig from "./expressConfig.interface";
import Controller from "./Controller";
class AppExpress {
    public app:express.Application;
    public config:ExpressConfig;
    public controllers:Controller;
    constructor(config:ExpressConfig, constrollers:Controller) {
        this.app = express();
        this.config = config
        this.controllers = constrollers
        this.initializateMiddlewares()
        
    }
    public addMiddleware(middleware:any) {
        this.app.use(middleware)
    }
    public initializateMiddlewares() {
        this.app.use(express.json())
        
        if (this.config.environment === "dev") this.app.use(morgan("dev"))
    }

    public initializateControllers() {
        
        this.app.use(this.controllers.path, this.controllers.router)
    }

    public listen() {
        this.app.listen(this.config.port, () => {
            console.log(`App listening on the port ${this.config.port}`)
        })
    }
}

export default AppExpress