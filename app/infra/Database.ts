import * as mongoose from 'mongoose';

class Database{
    private DB_URL = 'mongodb://mongo/portal_noticia';

    createConnection(){
        mongoose.connect(this.DB_URL, {useNewUrlParser: true});
    }
}

export default Database;