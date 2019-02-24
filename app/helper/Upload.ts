import * as multer from 'multer';

const storage = multer.diskStorage({
    destination: function(requisicao, file, callback){
        callback(null, "uploads/");
    },
    filename: function(requisicao, file, callback){
        callback(null, file.originalname);
    }
});

const uploads = multer({storage: storage});

export default uploads;