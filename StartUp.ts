import * as express from 'express'
import Database from './app/infra/Database';
import * as BodyParser from 'body-parser';
import bodyParser = require('body-parser');

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

    middler(){
        this.app.use(BodyParser.json());
        this.app.use(BodyParser.urlencoded({extended: false}));
    }
}

export default new StartUp();