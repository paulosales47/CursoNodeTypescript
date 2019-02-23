class Helper{
    sendResponse(resposta, statusCode, data){
        resposta.send(statusCode).json({result: data});
    }
}

export default new Helper();