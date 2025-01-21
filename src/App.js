
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Row, Col} from 'react-bootstrap';
import data from "./data/shoes-data";
import { useState } from "react";
import Product from './component/Product';
import { Link,Route, Routes, useNavigate } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';



function App() {
  const [product, setProduct] = useState(data);
  let navigate = useNavigate();
  
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              navigate("/")
            }}>
              {/* <Link to={"/"}>Home</Link> */}
              Home
              </Nav.Link>
              <Nav.Link onClick={()=>{
               navigate("/cart") 
              }} >
              {/* <Link to={"/cart"}>Cart</Link> */}
              Cart
              </Nav.Link>

              <Nav.Link onClick={()=>{
               navigate("/about") 
              }} >
              {/* <Link to={"/cart"}>Cart</Link> */}
              About
              </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' onClick={()=>
        navigate("/detail")
      }></div>

      {/* 라우터 처리 */}
      <Routes>
        <Route path='/' element={<div>메인페이지</div>} />
        <Route index element={<div>홈.....</div>} />
        <Route path="/detail/:id" element={
          <div>
          <DetailPage product={product} />
          </div>} 
          />
        <Route path="/cart" element={<div>장바구니페이지</div>} />
        <Route path="/about" element={<div><AboutPage/></div>} />
          <Route path="member"element={<div>직원소개 페이지</div>} />
          <Route path="location" element={<div>길 안내 페이지</div>} />
        <Route path="*" element={
          <div>
            <h4>
            page not found 404 error.
            </h4>
            <p>
              not found.
            </p>
           
          </div>
        }/>
      </Routes>

    

      <Container>
            <Row className="justify-content-md-center">
              {
                product.map(function(x,i){
                  return(
                    <Col>
                      <Product product = {product} index = {i}
                      />  
                    </Col>
                  )
                })
              }  
          </Row>
        </Container>
    </div>
  );
}



export default App;
