import * as mongoose from 'mongoose';

class Database{

    private DB_URL = process.env.PORT 
    ? 'mongodb://conexao/portal_noticia' 
    : 'mongodb://localhost:27017/portal_noticia';

    createConnection(){
        mongoose.connect(this.DB_URL, {useNewUrlParser: true});
    }
}

export default Database;