import axios   from 'axios';

const url = 'http://localhost:5000';


export const signIn = (formdata) => axios.post(`${url}/user/signin`,  formdata);
export const signUp = (formdata) => axios.post(`${url}/user/signup`,  formdata);

export const addProduct = (formdata) => axios.post(`${url}/product/add`,  formdata);
export const fetchProduct = (page) => axios.get(`${url}/product?page=${page}`);
export const updateProduct = (id , formdata) => axios.put(`${url}/product/${id}`,formdata);
export const deleteProduct = (id) => axios.delete(`${url}/product/${id}`);
export const fetchSingleProduct = (id) => axios.get(`${url}/product/${id}`);
