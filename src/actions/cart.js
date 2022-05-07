import { CART_REMOVE_ITEM , CART_ADD_ITEM } from '../constans/actionTypes';
import * as api from '../api/index';

export const addToCart = (id , qty) => async (dispatch) => {
    try {
      
  
      const { data } = await api.fetchSingleProduct(id);
      console.log("cart");
      console.log(data);
      dispatch({ type: CART_ADD_ITEM ,
                 payload:{
                             product: data._id,
                             name : data.name,
                             img : data.img,
                             price : data.price,
                             desc : data.desc,
                             title : data.title,
                             categories : data.categories,
                             qty, 
                            
                            } });
  
    } catch (error) {
      console.log(error);
    }
  };

  export const removefromcart = (id) => (dispatch) => {
    try {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });
    } catch (error) {
    console.log(error);
  }
  };