import {AUTH} from '../constans/actionTypes';
import * as api from '../api/index';


export const signin = (formdata , navigate) => async(dispatch) =>{

    try{
        const {data} = await api.signIn(formdata);
            console.log(data.result);
            dispatch({type: AUTH, data});
            navigate("/");
        
        
    }catch(error){
            console.log(error);
    }
}

export const signup = (formdata , navigate) => async(dispatch) =>{

    try{
        const {data} = await api.signUp(formdata);
        console.log(data.result);
        dispatch({type: AUTH, data});
        if(data){
            alert("successs......");
        }
       
        navigate("/");
        
    }catch(error){
        alert("Email Already Exist , Try With a Different Email ...");
        console.log(error);
    }
}

