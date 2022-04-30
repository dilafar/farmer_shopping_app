import React,{useState} from 'react'
import { Form ,FormGroup , Label ,Input,Card} from 'reactstrap'
import Navbar from '../components/Navbar'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Login = () => {
  const [isSignup , setIsSignup] = useState(false);
  const [firstname , setfirstname] = useState('');
  const [lastname , setlastname] = useState('');
  const [email , setemail] = useState('');
  const [password , setpassword] = useState('');
  const [confirmpassword , setconfirmpassword] = useState('');
  const [address , setaddress] = useState('');
  const [phone , setphone] = useState(0);

  const switchMode = () => {
   
    setIsSignup((prevIsSignup) => !prevIsSignup);
   
  };
  return (
    <div>
      <div  className="shadow p-3 mb-5 bg-white rounded" >
        <Navbar />
        </div>
        <Card style={{ margin: "100px 500px 40px 500px"}}>
          
        <Form>
          <div style={{ marginLeft: "300px" , marginTop: "50px" , marginBottom: "100px"}}>
          <h2 style={{ margin: "30px 0px 30px 300px" , }}>{isSignup ? "Register" : "Login"}</h2>
          {isSignup && (
              <>
          <div style={{ display: "flex" }}>
           
        <FormGroup>
        <Label for="fname">
      First Name
    </Label>
    <Input
      id="fname"
      name="firstname"
      placeholder="with a placeholder"
      type="text"
      value={firstname}  onChange={(e)=> setfirstname(e.target.value)}
      style={{width: "330px"}}
    />
  </FormGroup>
  <FormGroup>
    <Label for="lname"  style={{ marginLeft: "40px"}}>
      Last Name
    </Label>
    <Input
      id="lname"
      name="lastname"
      placeholder="with a placeholder"
      type="text"
      value={lastname}  onChange={(e)=> setlastname(e.target.value)}
      style={{width: "330px" , marginLeft: "40px"}}
    />
  </FormGroup>
  </div>
  </>
)}
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
      value={email}  onChange={(e)=> setemail(e.target.value)}
      style={{width :  "700px"}}
    />
  </FormGroup>

  {isSignup && (
              <>
  <FormGroup>
    <Label for="price">
      Phone Number
    </Label>
    <Input
      id="phone"
      name="phone"
      placeholder="with a placeholder"
      type="Number"
      value={phone}  onChange={(e)=> setphone(e.target.value)}
      style={{width :  "700px"}}
    />
  </FormGroup>


  <FormGroup>
    <Label for="exampleText">
      Address
    </Label>
    <Input
      id="exampleText"
      name="address"
      type="textarea"
      value={address}  onChange={(e)=> setaddress(e.target.value)}
      style={{width :  "700px" , height: "250px"}}
    />
  </FormGroup>
</>
  )}
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
      value={password}  onChange={(e)=> setpassword(e.target.value)}
      style={{width :  "700px"}}
    />
  </FormGroup>
  {isSignup && (
              <>
  <FormGroup>
    <Label for="examplePassword">
      Confirm Password
    </Label>
    <Input
      id="examplePassword"
      name="confirmpassword"
      placeholder="password placeholder"
      type="password"
      value={confirmpassword}  onChange={(e)=> setconfirmpassword(e.target.value)}
      style={{width :  "700px"}}
    />
  </FormGroup>
</>
  )}
  <Button type="submit" color="success"  variant="contained" endIcon={<SendIcon />}>
    Submit
  </Button>
<br/>
  <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>

  </div>
        </Form>

        </Card>
      </div>
  )
}

export default Login