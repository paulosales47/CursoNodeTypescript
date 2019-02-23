import * as mongose from 'mongoose';

const NewsSchema = new mongose.Schema({
    hat: {type: String},
    title: {type: String},
    text: {type: String},
    author: {type: String},
    img: {type: String},
    publishDate: {type: Date},
    link: {type: String},
    active: {type: Boolean},
});

export default NewsSchema;