import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getProducts } from '../../actions/product';
import Item from './item';
import Paginationitem from './Pagination';
import Navbar from '../../components/Navbar';



function useQuery(){
    return new URLSearchParams(useLocation().search);
}


const Listitems2 = () => {
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page') || 1 ;
      const { products} = useSelector((state) => state.product);
     
  return (
    <div>
        <div  className="shadow p-3 mb-5 bg-white rounded" >
        <Navbar />
        </div>
             <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'2rem', margin:"150px"}}>
    { products?.map((product) => (
          <div >
            <Item product={product}  key={product._id} />
         </div>
        ))}

  </div>

  <div style={{ margin:"0px 150px 0 150px"}}>
 <Paginationitem page={page}/>
</div>
<br/>
<br/>


    </div>
  )
}

export default Listitems2;