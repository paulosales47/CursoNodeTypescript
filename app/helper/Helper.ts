class Helper{
    sendResponse(resposta, statusCode, data){
        resposta.status(statusCode).send(data);
    }
}

export default new Helper();