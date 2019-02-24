import * as mongoose from 'mongoose';

class Database{
    private DB_URL = 'mongodb://conexao/portal_noticia';

    createConnection(){
        console.log(process.env);
        mongoose.connect(this.DB_URL, {useNewUrlParser: true});
    }
}

export default Database;