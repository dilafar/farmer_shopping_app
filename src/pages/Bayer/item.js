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
   
    <Card onClick={open}>
      
    <CardImg
      alt="Card image cap"
      src={product.img}
      top
      width="100%"
    />
    <CardBody>
      
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <div style={{display: "flex"}}> 
    
    </div>
   
    </CardBody>
    
  </Card>
  
  )
}

export default Item