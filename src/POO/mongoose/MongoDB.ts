import MongoDBConfig from "./MongoDBConfig";
import mongoose from "mongoose";
class MongoDB {
    private config:MongoDBConfig;
    private mongoose:any = mongoose;
    constructor(config:MongoDBConfig) {
        this.config = config
        //console.log(this.config)
    }

    /**
     * connect
     */
    public async connect() {
        const { user, password, path } = this.config
        try { // mongodb://${user}:${password}${path} - rec_humanos - mongodb+srv://erick:<password>@cluster0-ljla2.mongodb.net/test?retryWrites=true&w=majority
            await this.mongoose.connect(`mongodb+srv://erick:$Papaya123@cluster0-ljla2.mongodb.net/rec_humanos?retryWrites=true&w=majority`, 
            { useNewUrlParser: true, useUnifiedTopology: true } )
            console.log("database is connected")
        } catch (e) {
            console.error(`error!!! ${e}`)
        }
    }
}

export default MongoDB