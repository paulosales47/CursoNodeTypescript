import * as mongoose from 'mongoose';

class Database{
    private DB_URL = 'mongodb://localhost:27017/portal_noticia';

    createConnection(){
        mongoose.connect(this.DB_URL, {useNewUrlParser: true});
    }
}

export default Database;