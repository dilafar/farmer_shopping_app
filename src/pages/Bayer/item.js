import React , { useState, useEffect }from 'react';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody,CardImg,CardTitle,CardSubtitle,CardText } from 'reactstrap';


import {Link, useNavigate} from  "react-router-dom";
import { optionGroupUnstyledClasses } from '@mui/material/node_modules/@mui/base';


const Item = ({ product}) => {
   const navigate = useNavigate();
 
 
const open =()=>{
  
    navigate(`/product/${product._id}`);

}
  
  
  
  return (
   
    <Card onClick={open} style={{maxWidth: '500px' ,maxHeight: '500px'}}>
      
    <CardImg
      alt="Card image cap"
      src={product.img}
      top
      width="100%"
      style={{maxHeight: '320px'}}
    />
    <CardBody>
      
      <CardTitle tag="h5">
      {product.title}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       {product.name}
      </CardSubtitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       <span>RS : </span>{product.price}
      </CardSubtitle>
      <CardText>
      {product.desc}
      </CardText>
      <div style={{display: "flex"}}> 
    
    </div>
   
    </CardBody>
    
  </Card>
  
  )
}

export default Item