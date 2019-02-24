import * as express from 'express'
import Database from './app/infra/Database';

class StartUp{
    public app: express.Application
    private _db:Database;

    constructor() {
        this.app = express();
        this.router();

        this._db = new Database();
        this._db.createConnection();
    }

    router(){
        this.app.route('/').get((requisicao, resposta)=> {
            resposta.send({versao: '0.0.1'});
        });
    }
}

export default new StartUp();