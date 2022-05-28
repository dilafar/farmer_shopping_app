import React ,{useState,useEffect} from "react";
import {useDispatch} from 'react-redux'
import {createProduct} from '../../actions/product'
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled"
import SendIcon from '@mui/icons-material/Send';


import FileBase from 'react-file-base64';


import Box from '@mui/material/Box';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody } from 'reactstrap';
import Button from '@mui/material/Button';

import { Stack } from "@mui/material";
import Alert from '@mui/material/Alert';

 



const Additems = () => {
  

  const [title , settitle] = useState('');
  const [desc , setdesc] = useState('');
  const [img , setimg] = useState('');
  const [categories , setcategories] = useState('');
  const [price , setprice] = useState(0);



  const dispatch = useDispatch();
  const navigation = useNavigate();
 

 

  const handleSubmit = (e) =>{
          e.preventDefault();
        
                  dispatch(createProduct({title ,desc, img,categories, price}));
         
          console.log({title ,desc, img,categories, price});
          clear();
  };

  const clear =()=>{
    settitle('');
    setdesc('');
    setimg('');
    setcategories('');
    setprice(0);
  }
 

  return (
    
          <div >
       <div className="modal-header bg-info text-white">
                    <h5 className="modal-title text-white">Add Product</h5>
                    
                        
                </div>  <br/>
  
 <Form  onSubmit={handleSubmit}>
      


     
 <FormGroup>

              
    <Label for="id">
      Title
    </Label>
    <Input
      id="title"
      name="title"
      placeholder="with a placeholder"
      type="text"
      value={title}  onChange={(e)=> settitle(e.target.value)}
     
    />
  </FormGroup>
    
 
  



  <FormGroup>
    <Label for="categories">
      categories
    </Label>
    <Input
      id="categories"
      name="categories"
      type="select"
      onChange={(e)=> setcategories(e.target.value)}
      style={{width: "800px"}}
    >
       <option value = "seeds">
        Select categorie
      </option>
    <option value = "seeds">
        seeds
      </option>
      <option value = "plants">
        plants
      </option>
      <option value = "compost">
        compost
      </option>
      <option value = "farmingEquipment">
      farmingEquipment
      </option>
      <option value = "fertilizer">
      fertilizer
      </option>
    </Input>
  </FormGroup>

  

  <FormGroup>
    <Label for="price">
      Price
    </Label>
    <Input
      id="price"
      name="price"
      placeholder="with a placeholder"
      type="Number"
      value={price}  onChange={(e)=> setprice(e.target.value)}
     
    />
  </FormGroup>

 

 







  <FormGroup>
    <Label for="desc">
    Description
    </Label>
    <Input
      id="desc"
      name="desc"
      type="textarea"
      value={desc}  onChange={(e)=> setdesc(e.target.value)}
      style={{height: "300px"}}
    />
  </FormGroup>
  

  <FormGroup>
    <Label for="img">
      File
    </Label>
   <br/>
     <FileBase type="file" id="img" 
                 multiple={false}
                 onDone={({base64})=> setimg(base64)}
                 style={{width: "400px"}} /><br/>
   
  </FormGroup>

 

  <Button style={{width: "200px"}} color="success" type="submit" variant="contained" endIcon={<SendIcon />}>
    Submit
  </Button>
<br/>
  
</Form>



    </div>
      
    
  )
}

export default Additems;