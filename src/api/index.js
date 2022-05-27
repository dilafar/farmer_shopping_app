import axios   from 'axios';

//const url = 'http://localhost:8000';
const url = 'http://localhost:8280';

/*
export const signIn = (formdata) => axios.post(`${url}/user/signin`,  formdata);
export const signUp = (formdata) => axios.post(`${url}/user/signup`,  formdata);
export const fetchUser = () => axios.get(`${url}/user`);
export const updateUser = (id , formdata) => axios.put(`${url}/user/${id}`,formdata);
export const deleteUser = (id) => axios.delete(`${url}/user/${id}`);

export const addProduct = (formdata) => axios.post(`${url}/product/add`,  formdata,{
    headers:{
      Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
  });
export const fetchProduct = (page) => axios.get(`${url}/product?page=${page}`);
export const updateProduct = (id , formdata) => axios.put(`${url}/product/${id}`,formdata);
export const deleteProduct = (id) => axios.delete(`${url}/product/${id}`);
export const fetchSingleProduct = (id) => axios.get(`${url}/product/${id}`);
*/



export const signIn = (formdata) => axios.post(`${url}/user/logIn`,  formdata);
export const signUp = (formdata) => axios.post(`${url}/user/register`,  formdata);
export const fetchUser = () => axios.get(`${url}/user/getUsers`);
export const updateUser = (id , formdata) => axios.put(`${url}/user/updateUser/${id}`,formdata);
export const deleteUser = (id) => axios.delete(`${url}/user/deleteuserEP/${id}`);

export const addProduct = (formdata) => axios.post(`${url}/product/addProduct`,  formdata,{
    headers:{
      Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
  });
export const fetchProduct = (page) => axios.get(`${url}/product/getProducts?page=${page}`);
export const updateProduct = (id , formdata) => axios.put(`${url}/product/updateProduct/${id}`,formdata);
export const deleteProduct = (id) => axios.delete(`${url}/product/deleteProduct/${id}`);
export const fetchSingleProduct = (id) => axios.get(`${url}/product/getProductByID/${id}`);