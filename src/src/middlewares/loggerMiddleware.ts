import * as express from "express";

function loggerMiddleware(req:express.Request, res:express.Response, next:any) {
    console.log(`${req.method} ${req.path}`)
    next();
}

export { loggerMiddleware }