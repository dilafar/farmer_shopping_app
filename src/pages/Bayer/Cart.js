import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate , useParams} from "react-router-dom";
import {addToCart , removefromcart } from '../../actions/cart';
import Navbar from '../../components/Navbar';
import './cartstyle.css';
import { Card } from 'reactstrap';
import Button from '@mui/material/Button';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const qty = window.location.search ? Number(window.location.search.split("=")[1]) : 1;
    const cart = useSelector((state) => state.cart);
    const {  cartItems } = cart;
    const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

    useEffect(() => {
        if (id) {
          dispatch(addToCart(id, qty));
         
          console.log("cot");
         
        }
       
      }, [dispatch, id, qty]);

      const removeFromCartHandle = (id) => {
        dispatch(removefromcart(id));
      };
  return (
    <div>
        <div  className="shadow p-3 mb-3 bg-white rounded" >
          <Navbar length={cartItems.length}/>
          </div>  
          <Card style={{ margin: "100px" , padding : "100px"}}>
         {cartItems.length === 0 ? (
              <div className=" alert alert-info text-center mt-3">
              Your cart is empty
              </div>
                ) : (
                    <>
                     {cartItems.map((item) => (
        <div className="cart-item d-md-flex justify-content-between"><span className="remove-item"><i className="fa fa-times" onClick={() => removeFromCartHandle(item.product)}></i></span>
        <div className="px-3 my-3">
            <a className="cart-item-product" href="#">
                <div className="cart-item-product-thumb"><img src={item.img} alt="Product"/></div>
                <div className="cart-item-product-info">
                    <h4 className="cart-item-product-title">Canon EOS M50 Mirrorless Camera{item.product}</h4><span><strong>Type:</strong> Mirrorless</span><span><strong>Color:</strong> Black</span>
                </div>
            </a>
        </div>
        <div className="px-3 my-3 text-center">
            <div className="cart-item-label">Quantity</div>
            <div className="count-input">
                <select class="form-control" >
                    <option value = {item.qty}>{item.qty}</option>
                    <option value = {1}>1</option>
                    <option value = {2}>2</option>
                    <option value = {3}>3</option>
                    <option value = {4}>4</option>
                    <option value = {5}>5</option>
                    <option value = {6}>6</option>
                </select>
            </div>
        </div>
        <div className="px-3 my-3 text-center">
            <div className="cart-item-label">Subtotal</div><span className="text-xl font-weight-medium">RS {item.price}</span>
        </div>
        
    </div>
       ))}
    </>
)}
<br/>
<br/>
<div style={{display : "flex" , marginLeft: "1620px"}}>
    <h2><span>Total : </span></h2>
    <h2><span style={{marginLeft: "10px"}}><span style={{marginLeft: "10px",marginRight : "10px"}}>RS</span>{total}</span></h2>
</div>
<Button  variant="contained" color="primary">MAKE DELIVERY</Button>
</Card>
    </div>
  )
}

export default Cart