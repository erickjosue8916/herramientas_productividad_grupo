import  { ExpressConfig }  from "../POO/express";
import MongoDBConfig from "../POO/mongoose/MongoDBConfig";
const configExpress:ExpressConfig ={
    port: process.env.PORT || 5000,
    environment: process.env.ENVIRONMENT || "dev"
}

const mongoDBConfig:MongoDBConfig = {
    user: process.env.MONGO_USER || "erick",
    password: process.env.MONGO_PASSWORD || "$Papaya123",
    path: process.env.MONGO_PATH || "@cluster0-ljla2.mongodb.net/test?retryWrites=true&w=majority"
}

export {configExpress, mongoDBConfig}