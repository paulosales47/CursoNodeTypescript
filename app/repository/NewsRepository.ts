import *  as mongose from 'mongoose';
import NewsSchema from '../models/NewsSchema';

export default mongose.model('news', NewsSchema);