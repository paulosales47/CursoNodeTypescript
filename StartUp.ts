import * as express from 'express'
import * as BodyParser from 'body-parser';

import Database from './app/infra/Database';
import  NewsConstroller from './app/controller/NewsController'


class StartUp{
    public app: express.Application
    private _db:Database;

    constructor() {
        this.app = express();
        this.middler();
        this.router();

        this._db = new Database();
        this._db.createConnection();
    }

    router(){
        this.app.route('/').get((requisicao, resposta)=> {
            resposta.send({versao: '0.0.1'});
        });

        this.app.route('/api/v1/news').get(NewsConstroller.get);
        this.app.route('/api/v1/news/:id').get(NewsConstroller.getById);
        this.app.route('/api/v1/news').post(NewsConstroller.create);
        this.app.route('/api/v1/news/:id').put(NewsConstroller.update);
        this.app.route('/api/v1/news/:id').delete(NewsConstroller.delete);
    }

    middler(){
        this.app.use(BodyParser.json());
        this.app.use(BodyParser.urlencoded({extended: false}));
    }
}

export default new StartUp();