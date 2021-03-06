import Navbar from '../../components/Navbar'
import React,{useState , useEffect} from 'react'
import { Form ,FormGroup , Label ,Input,Card , Dropdown , DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useDispatch , useSelector} from "react-redux";
import {useNavigate ,useParams} from "react-router-dom"
import PaymentIcon from '@material-ui/icons/Payment';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import axios from 'axios';

const Delivery2 = () => {
    const [card , setcard] = useState(false);
    const [mobile , setmobile] = useState(false);
    const  [cvcCode , setcvc] = useState(0);
    const [cardHolder, setname] = useState('');
    const [cardNo, setcardnumber] = useState(0);
    const [phoneNo , setphone] = useState(0);
    const [pin, setpin] = useState(0);

    const [address , setaddress] = useState('');
    const [city , setcity] = useState('');
  
    const [shipamount , setshipamount] = useState(0);
    const [total , settotal] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const {  cartItems } = cart;
    const [products , setproducts]= useState(cartItems);
    const total2 = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);
    const {id} = useParams();
    const [itemamout, setitemamount] = useState(Number(total2));
    useEffect(() => {
        const total3 = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);
        setitemamount(Number(total3))
        
       
      }, []);
    

    const handleSubmit = (e) =>{
        e.preventDefault();
       settotal(itemamout+shipamount);
        const delivery = {
          products,
          address,
          total
        }

     
      
                axios.post('http://localhost:8000/delivery/addDelivery', delivery,{
                  headers:{
                    Authorization : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
                  }
                }).then(res =>{
                  if(res.data){
                    alert('Your payment was successfully made please check your mail...');
                    window.location='/success'
                  }else{
                    alert("Invalid shipping details")
                  }
                }).catch(err =>{
                  console.log(err);
                })
              
       

       
       
       
    };
    const switchMode1 =()=>{
            setcard(true);
            setmobile(false);
    }
  
    const switchMode2 =()=>{
        setcard(false);
            setmobile(true);
    }
    const ondone =(e)=>{
        e.preventDefault();
        navigate(`/success`);
      }
 
  return (
    <div>
         <div  className="shadow p-3 mb-3 bg-white rounded" >
          <Navbar/>
          </div>  
        
        
        <Card style={{ margin: "100px 500px 40px 500px"}}>
          
          <Form onSubmit={handleSubmit}>
            <div style={{ marginLeft: "420px" , marginTop: "50px" , marginBottom: "100px"}}>
            <h2 style={{ margin: "30px 0px 30px 150px" , }}>Checkout</h2>

    

    <h2 style={{ margin: "30px 0px 30px 120px" , }}>Shipping Details</h2>


    <FormGroup>
          <Label for="fname">
        Address
      </Label>
      <Input
        id="address"
        name="address"
        placeholder="with a placeholder"
        type="text"
        value={address}  onChange={(e)=> setaddress(e.target.value)}
        style={{width: "450px"}}
      />
    </FormGroup>

    <FormGroup>
                <div style={{ display : "flex"}}>
    <Label for="exampleSelect">
    Select Your City 
    </Label>
    <Input
      id="exampleSelect"
      name="city"
      type="select"
      style={{width: " 303px" , marginLeft: "20px" }}
      onChange={(e)=> setcity(e.target.value)}
    >
        <option >
        Select
      </option>
      <option value = "Colombo">
        Colombo
      </option>
      <option value = "Dehiwala">
        Dehiwala
      </option>
     
    </Input>
    </div>
  </FormGroup>

    <FormGroup>
      <Label for="price">
        Item Amount
      </Label>
      <Input
        id="itemamout"
        name="itemamout"
        placeholder="with a placeholder"
        type="Number"
        value={itemamout}  onChange={(e)=> setitemamount(e.target.value)}
        style={{width: "450px"}}
      />
    </FormGroup>

    <FormGroup>
      <Label for="price">
        Shipping Amount
      </Label>
      <Input
        id="shipamount"
        name="shipamount"
        placeholder="with a placeholder"
        type="Number"
        value={shipamount}  onChange={(e)=> setshipamount(e.target.value)}
        style={{width: "450px"}}
      />
    </FormGroup>

    <FormGroup>
      <Label for="price">
        Total Amount
      </Label>
      <Input
        id="total"
        name="total"
        placeholder="with a placeholder"
        type="Number"
        value={Number(itemamout)+Number(shipamount)}  onChange={(e)=> settotal(e.target.value)}
        style={{width: "450px"}}
      />
    </FormGroup>
   
 
  
    <Button type="submit" color="success"  variant="contained" endIcon={<SendIcon />} >
      Submit
    </Button>
  <br/>
   
 
    </div>
          </Form>
  
          </Card>

        </div>
  )
}

export default Delivery2;