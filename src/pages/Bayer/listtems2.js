import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getProducts } from '../../actions/product';
import Item from './item';
import Paginationitem from './Pagination';
import Navbar from '../../components/Navbar';
import Button from '@mui/material/Button';


function useQuery(){
    return new URLSearchParams(useLocation().search);
}


const Listitems2 = () => {
    const [all , setall] = useState(true);
    const  [other , setother] = useState(false);
    const [categorie , setcategories] = useState('');
    const [seeds , setseeds]= useState('seeds');
    const [plants , setplants]= useState('plants');
    const [compost , setcompost] = useState('compost');
    const [farmingEquipment , setfarming]= useState('farmingEquipment');
    const [fertilizer , setfertilizer] = useState('fertilizer')
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page') || 1 ;
      const { products} = useSelector((state) => state.product);

    const switchMode1 =()=>{
        setall(true);
        setother(false);
    }
      
    const switchMode2 =()=>{
        setall(false);
        setother(true);
        setseeds('seeds');
        setcategories(seeds);
        console.log(seeds);
    }
      
    const switchMode3 =()=>{
      setall(false);
      setother(true);
      setplants('plants');
      setcategories(plants);
      console.log(plants);
    }
      
    const switchMode4 =()=>{
      setall(false);
      setother(true);
      setcompost('compost')
      setcategories(compost);
      console.log(compost);
    }
      
    const switchMode5 =()=>{
      setall(false);
      setother(true);
      setfarming('farmingEquipment')
      setcategories(farmingEquipment);
      console.log(farmingEquipment);
    }
      
    const switchMode6 =()=>{
      setall(false);
      setother(true);
      setfertilizer('fertilizer')
      setcategories(fertilizer);
      console.log(fertilizer);
    }


      
     
  return (
    <div>
        <div  className="shadow p-3 mb-5 bg-white rounded" >
        <Navbar />
        </div>
        <Button color="primary" variant="contained"  style={{marginLeft: "140px"}} onClick={switchMode1}>All</Button>
     <Button color="primary"  variant="contained"  onClick={switchMode2} style={{marginLeft: "20px"}}>seeds</Button>
     <Button color="primary"  variant="contained"  onClick={switchMode3} style={{marginLeft: "20px"}}>plants</Button>
     <Button color="primary"  variant="contained"  onClick={switchMode4} style={{marginLeft: "20px"}}>compost</Button>
     <Button color="primary"  variant="contained"  onClick={switchMode5} style={{marginLeft: "20px"}}>farmingEquipment</Button>
     <Button color="primary"  variant="contained"  onClick={switchMode6} style={{marginLeft: "20px"}}>fertilizer</Button>

    
     
    
    
    
    
    

   
 
   
     { all  && (
       <> 
             <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'2rem', margin:"150px"}}>
    { products?.map(product => 
  
          <div >
            <Item product={product}  key={product._id} />
         </div> 
        )}

  </div>
  </>
  )}

{ other  && (
       <> 
             <div style={{display : 'grid' , gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))', gap:'2rem', margin:"150px"}}>
    { products?.map(product => 
     
       product.categories === categorie ?
       
       
          <div >
            <Item product={product}  key={product._id} />
         </div>

         :""
        
        )}



  </div>
  </>
  )}

  <div style={{ margin:"0px 150px 0 150px"}}>
 <Paginationitem page={page}/>
</div>
<br/>
<br/>


    </div>
  )
}

export default Listitems2;