import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {getProducts} from '../../../actions/product'
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import Product from './product/product';
import Paginationitem from '../../../components/Pagination';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const ListProduct = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get('page') || 1 ;
    const { products} = useSelector((state) => state.product);
   
   
  
  return (
   
  <div>
    <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'2rem'}}>
    { products?.map((product) => (
          <div >
            <Product product={product}  key={product._id} />
         </div>
        ))}

  </div>
  <br/>
<Paginationitem page={page}/>
  </div>
    )
    
  
}

export default ListProduct