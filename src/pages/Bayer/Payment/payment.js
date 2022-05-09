import React ,{Component,useState,useEffect} from "react";

import { useNavigate } from "react-router-dom";

import '../../../assets/css/payment.css';

//import SellerNavbar from '../../../components/sellerNav/SellerNavBar';
//import SellerSidebar from '../../../components/sellerNav/SellerSideBar';
import Navbar from '../../../components/Navbar';



import{
    Label,
    Input,
    Button,
    Form, FormGroup,  FormFeedback, FormText
  }
  from 'reactstrap'

  import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

//toast.configure();

function Payment(){

    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile]= useState("");
    const [accNo, setAccNo]= useState("");
    const [exDate, setExDate]= useState("");
    const [cvv, setCvv]= useState("");

    function sendData(e){
        e.preventDefault();

        const newPayment ={
            name,
            email,
            mobile,
            accNo,
            exDate,
            cvv
        }

    axios.post("http://localhost:5000/payments/payAdd", newPayment ). then(()=>{
        
    }).catch((err)=>{
        alert(err);
    });
    window.location.reload();

    }

    return(
        <div>

        <div  className="shadow p-3 mb-5 bg-white rounded" >
        <Navbar />
        </div>

        <h2> &nbsp;&nbsp; Payment Details </h2>
        

        <div className="App">
        <Form className="form" onSubmit={sendData}>
        <FormGroup>
            <Label for="fullname">Full Name</Label>
               <Input type="text" name="fullname" id="fullname" placeholder="enter your full name"
               
               required
               onChange={(e)=>{
                   setName(e.target.value);
               }}/>
            </FormGroup>

            <FormGroup>
            <Label for="exampleEmail">Email</Label>
               <Input type="email" name="email" id="exampleEmail" placeholder="enter your email" required
               onChange={(e)=>{
                   setEmail(e.target.value);
               }} />
            </FormGroup>

            <FormGroup>
            <Label for="mobile">Mobile Number</Label>
               <Input type="number" name="mobile" id="mobile" placeholder="enter your mobile number" 
               pattern="[0-9]{10}"
               title = "Enter valid phone number"
               required
               onChange={(e)=>{
                setMobile(e.target.value);
               }}/>
            </FormGroup>

            <br/>
         <center><h3><u>Provide further information</u></h3></center>
         <br/>

        <FormGroup>
            <Label for="AccountNumber">Account Number</Label>
               <Input type="number" name="AccountNumber" id="AccountNumber" placeholder="account number" 
               pattern="[0-9]{12}"
               title = "Enter valid account number"
               required
               onChange={(e)=>{
                setAccNo(e.target.value);
               }}/>
            </FormGroup>

            <FormGroup>
            <Label for="Exdate">Expire Date</Label>
               <Input type="month" name="Exdate" id="Exdate" placeholder="expire date" required
               onChange={(e)=>{
                setExDate(e.target.value);
               }}/>
            </FormGroup>

            <FormGroup>
            <Label for="CVV">CVV</Label>
               <Input type="number" name="CVV" id="CVV" placeholder="cvv" 
               pattern="[0-9]{3}"
               title = "Enter valid cvv"
               required
               onChange={(e)=>{
                setCvv(e.target.value);
               }}/>

            <br/>
            <Button color="secondary" type="submit" style = {{float:'right' , margin : "5px" }}>
             Submit
            </Button>
            </FormGroup>

            
            
           
        </Form>
 
        </div>
        
        </div>
    )
}
export default Payment;
