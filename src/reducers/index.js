import {combineReducers} from 'redux';
import auth from './auth';
import product  from './product'
import user from './user';
import cart from './cart';

export default combineReducers({
    auth , product,user,cart
});