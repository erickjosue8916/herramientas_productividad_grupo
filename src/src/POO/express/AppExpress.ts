import express from  "express";
import morgan from "morgan";
import ExpressConfig from "./expressConfig.interface";
import Controller from "./Controller";
class AppExpress {
    public app:express.Application;
    public config:ExpressConfig;
    constructor(config:ExpressConfig, constrollers:Controller) {
        this.app = express();
        this.config = config
        this.initializateMiddlewares()
        this.initializateControllers(constrollers)
        
    }

    private initializateMiddlewares() {
        this.app.use(express.json())
        
        if (this.config.environment === "dev") this.app.use(morgan("dev"))
    }

    private initializateControllers(controllers:Controller) {
        
        this.app.use(controllers.path, controllers.router)
    }

    public listen() {
        this.app.listen(this.config.port, () => {
            console.log(`App listening on the port ${this.config.port}`)
        })
    }
}

export default AppExpress