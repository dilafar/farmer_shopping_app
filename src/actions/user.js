import {FETCH_ALL_USER , UPDATE_USER , DELETE_USER} from '../constans/actionTypes';
import * as api from '../api/index';


export const getallusers = () =>async(dispatch)=>{
    try {
        const { data }  = await api.fetchUser();
        console.log(data);
        dispatch({ type: FETCH_ALL_USER , payload: data });
      } catch (error) {
        console.log(error);
      }
}

export const updateUsers = (id , user) => async(dispatch)=>{
    try {
        const { data }  = await api.updateUser(id ,user);
        console.log(data);
        dispatch({ type: UPDATE_USER , payload: data });
      } catch (error) {
        console.log(error);
      }
}

export const deleteUsers = (id) => async(dispatch)=>{
    try {
        const { data }  = await api.deleteUser(id);
        console.log(data);
        dispatch({ type: DELETE_USER , payload: id });
      } catch (error) {
        console.log(error);
      }
}