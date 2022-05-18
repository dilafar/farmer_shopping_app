import axios   from 'axios';

const url = 'http://localhost:8000';


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
