import NewsService from '../service/NewsService';
import Helper from '../helper/Helper';
import * as HttpStatus from 'http-status';

class NewsController{

    get(requisicao, resposta){
        NewsService.get()
        .then(news => Helper.sendResponse(resposta, HttpStatus.OK, news))
        .catch(error => console.error.bind(console, `Error ${error}`));
    }

    getById(requisicao, resposta){
        const _id = requisicao.params.id;

        NewsService.getById(_id)
        .then(news => Helper.sendResponse(resposta, HttpStatus.OK, news))
        .catch(error => console.error.bind(console, `Error ${error}`));
    }

    create(requisicao, resposta){
        let news = requisicao.body;

        NewsService.getById(news)
        .then(news => Helper.sendResponse(resposta, HttpStatus.CREATED, news))
        .catch(error => console.error.bind(console, `Error ${error}`));
    }

    update(requisicao, resposta){
        let _id = requisicao.params.id
        let news = requisicao.body;

        NewsService.update(_id, news)
        .then(news => Helper.sendResponse(resposta, HttpStatus.OK, `A notícia foi atualizado com sucesso`))
        .catch(error => console.error.bind(console, `Error ${error}`));
    }

    delete(requisicao, resposta){
        let _id = requisicao.params.id
        
        NewsService.delete(_id)
        .then(() => Helper.sendResponse(resposta, HttpStatus.NO_CONTENT, `A notícia foi removida com sucesso`))
        .catch(error => console.error.bind(console, `Error ${error}`));
    }
}

export default new NewsController();
