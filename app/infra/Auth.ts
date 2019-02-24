import * as jwt from 'jsonwebtoken';

import Config from './Config';

class Auth{

    validate(requisicao, resposta, next){
        var token = requisicao.headers["authorization"];
        if(token){
            jwt.verify(token, Config.secret , (erro, decoded) =>{
                if(erro)
                    return resposta.status(403).send({success: false, message: 'Invalid token'});                   
                else{
                    if(decoded.exp > new Date().setMinutes(-1))
                        next();
                    else
                        return resposta.status(403).send({success: false, message: 'Token expired'});                   
                }
            })
        }
        else
            return resposta.status(401).send({success: false, message: 'Unauthorized'}); 
        
    }
}

export default new Auth();