import {FETCH_ALL_USER , UPDATE_USER , DELETE_USER} from '../constans/actionTypes';

export default (users=[] , action)=>{

    switch(action.type){
        case FETCH_ALL_USER :
            return action.payload;
        case UPDATE_USER   :
            return users.map((user)=>(user._id === action.payload._id ? action.payload : user));
        case DELETE_USER   :
            return users.filter((user)=> user._id !== action.payload);
        default:
            return users;
    }

}