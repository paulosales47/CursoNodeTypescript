import * as express from 'express'
import * as BodyParser from 'body-parser';
import * as cors from 'cors';

import Database from './app/infra/Database';
import  NewsController from './app/controller/NewsController'
import Auth from './app/infra/Auth';


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
        
        this.app.use(Auth.validate);
        this.app.route('/api/v1/news').get(NewsController.get);
        this.app.route('/api/v1/news/:id').get(NewsController.getById);
        this.app.route('/api/v1/news').post(NewsController.create);
        this.app.route('/api/v1/news/:id').put(NewsController.update);
        this.app.route('/api/v1/news/:id').delete(NewsController.delete);
    }

    enablaCors(){
        const options: cors.CorsOptions = {
            methods: "GET, OPTIONS, PUT, POST, DELETE",
            origin: "*"
        };
        this.app.use(cors(options));
    }

    middler(){
        this.enablaCors();
        this.app.use(BodyParser.json());
        this.app.use(BodyParser.urlencoded({extended: false}));
    }
}

export default new StartUp();