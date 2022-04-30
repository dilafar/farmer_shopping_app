import * as React from 'react';
import Box from '@mui/material/Box';
import {useState,useEffect} from "react";
import Typography from '@mui/material/Typography';
import {updateProduct} from '../../actions/product';
import Modal from '@mui/material/Modal';
import { Form,FormGroup , Label ,Input ,option,FormText, Card, CardBody } from 'reactstrap';
import Button from '@mui/material/Button';
import FileBase from 'react-file-base64';
import UpdateIcon from '@mui/icons-material/Update';
import {useDispatch} from 'react-redux'

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '650px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const UpdateModel = ({ product}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title , settitle] = useState('');
  const [desc , setdesc] = useState('');
  const [img , setimg] = useState('');
  const [categories , setcategories] = useState('');
  const [price , setprice] = useState(0);

  useEffect(()=>{
    if(product){
        settitle(product.title);
        setdesc(product.desc);
        setcategories(product.categories);
        setimg(product.img);
        setprice(product.price);
    }
},[product]);

const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(updateProduct(product._id ,{title ,desc, img,categories, price}));
         
    console.log({title ,desc, img,categories, price});
    clear();
    handleClose();
            
};
const clear =()=>{
    settitle('');
    setdesc('');
    setimg('');
    setcategories('');
    setprice(0);
  }
 


  return (

          <div>
      <Button variant="contained" onClick={handleOpen} startIcon={<UpdateIcon />} style={{marginLeft: "10px"}}>Update</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
        <Form   onSubmit={handleSubmit}>
        <div className="modal-header bg-info text-white">
                    <h5 className="modal-title text-white">Update Product</h5>
                    
                        
                </div>


     
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
      
    >
      <option value = "Computing">
        Computing
      </option>
      <option value = "Engineering">
        Engineering
      </option>
      <option value = "Management">
        Management
      </option>
      <option value = "Medicine">
        Medicine
      </option>
      <option value = "Research">
        Research
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
                /><br/>
   
  </FormGroup>

  <Button variant="contained" type="submit" >
    Submit
  </Button>
  <Button onClick={handleClose} variant="contained" style={{marginLeft: "10px"}}>Cancel</Button>
<br/>

       </Form>
         
          
        </Box>
      </Modal>
    </div>
      
  )
}

export default UpdateModel