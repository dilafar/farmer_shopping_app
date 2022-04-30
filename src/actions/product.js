import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE , FETCH_PRODUCT} from '../constans/actionTypes';
import * as api from '../api/index';
import * as React from 'react';


export const getProducts = (page) => async (dispatch) => {
  try {
    const { data }  = await api.fetchProduct(page);
    console.log(data);
    dispatch({ type: FETCH_ALL , payload: data });
  } catch (error) {
    console.log(error);
  }
};



export const getProduct = (id) => async (dispatch) => {
  try {
    

    const { data } = await api.fetchSingleProduct(id);
    console.log(data);
    dispatch({ type: FETCH_PRODUCT, payload:{ product: data } });

  } catch (error) {
    console.log(error);
  }
};



export const createProduct = (products ) => async (dispatch) => {
  try {
    const { data } = await api.addProduct(products);
    console.log(data);
    
    dispatch({ type: CREATE, payload: data });
   alert("Product Added Successfull...")
  } catch (error) {
    console.log(error);
 
  }
};

export const updateProduct = (id, products) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id ,products);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};



export const deleteProduct = (id) => async (dispatch) => {
  try {
     await api.deleteProduct(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};