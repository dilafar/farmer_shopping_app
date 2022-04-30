import React , { useState, useEffect }from 'react';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody,CardImg,CardTitle,CardSubtitle,CardText } from 'reactstrap';


import Button from '@mui/material/Button';
import {ButtonBase} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';




import useStyles from './styles';
import UpdateModel from '../../../../components/Models/updateModel';
import DeleteModel from '../../../../components/Models/deleteModel';

const Product = ({ product}) => {
   
    const classes = useStyles();

  
  return (
    <Card >
      
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
     <DeleteModel product={product}/>

    <UpdateModel product={product}/>
    </div>
    </CardBody>
  </Card>
  )
}

export default Product