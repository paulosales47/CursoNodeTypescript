import * as express from 'express'

class StartUp{
    public app: express.Application

    constructor() {
        this.app = express();
        this.router();
    }

    router(){
        this.app.route('/').get((requisicao, resposta)=> {
            resposta.send({versao: '0.0.1'});
        });
    }
}

export default new StartUp();