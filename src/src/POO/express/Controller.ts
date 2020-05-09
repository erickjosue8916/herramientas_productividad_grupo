import IController from "./controller.interface";
import { Router } from "express";
import Verb from "./verb.enum";


class Controller implements IController {
    public path:string;
    public router:Router = Router();
    
    constructor(path:string) {
        this.path =path
    }

    /**
     * addVerb
     */
    public addVerb(method:Verb, path:string, ...action:any) {
        this.router[method](path, ...action)
    }

    public addController(controller:Controller) {
        this.router.use(controller.path, controller.router)
    }
}

export default Controller