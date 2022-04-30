import React ,{useEffect} from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate , useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import {getProduct} from '../../actions/product';
import { Card } from 'reactstrap';



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px 100px 100px 200px;
  display: flex;
  
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 90%;
  height: 80vh;
  object-fit: cover;
 
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  margin-top: 100px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  width: 250px;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;


const ProductDetails = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const { product} = useSelector((state) => state.product);

  useEffect(()=>{
            dispatch(getProduct(id));
  },[id]);

  return (
    <div>
      <div  className="shadow p-3 mb-5 bg-white rounded" >
        <Navbar />
        </div>
        <Card style={{ margin: "40px"}}>
        <Container>
     
      <Wrapper>
        <ImgContainer>
        {product  && (
          <Image src={product.img} />
        )}
          
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <br/><br/>
          <Price>$ 20</Price>
         
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
             
            
          </AddContainer>
          <Button>ADD TO CART</Button>
        </InfoContainer>
      </Wrapper>
     
    </Container>
    </Card>
    </div>
  )
}

export default ProductDetails;