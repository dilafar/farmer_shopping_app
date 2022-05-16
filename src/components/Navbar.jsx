import { Badge, Button } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React ,{useState , useEffect} from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link , useLocation , useNavigate} from 'react-router-dom';

const Container = styled.div`
  height: 80px;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = ({length}) => {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [state , setstate] = useState(false);
  const [adminNav , setadminNav] = useState(false);
  const navigate = useNavigate();
 
 
const open =()=>{
  
    navigate(`/cart`);

}
  

  useEffect(() => {
    const token = user?.result;

    if (token) {
      console.log(token.isFarmer);
      if(token.isFarmer === "Approved"){
          setstate(true);
      }else if(token.firstName === "admin"){
           setadminNav(true);
      }
      
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  return (
    <div >
    <Container >
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>  
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
        <MenuItem><Button  component={Link} to="/" variant="contained"> Home</Button></MenuItem>
        {state && (
          <>
        <MenuItem><Button  component={Link} to="/seller"  variant="contained"> Go to Seller</Button></MenuItem>
        </>
        )}
         {adminNav && (
          <>
        <MenuItem><Button  component={Link} to="/admin"  variant="contained"> Go to Admin</Button></MenuItem>
        </>
        )}
        <MenuItem><Button  component={Link} to="/product"  variant="contained"> View Products</Button></MenuItem>
          <MenuItem><Button component={Link} to="/auth"variant="contained"> SIGN IN </Button></MenuItem>
          
          <MenuItem>
         
            <Badge badgeContent={length} color="primary" onClick={open}>
              <ShoppingCartOutlined />
            </Badge>
            
          </MenuItem>
         
        </Right>
      </Wrapper>
    </Container>
    </div>
  )
}

export default Navbar