/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { lazy, Suspense, createContext, useEffect, useState } from 'react';
import { data } from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query';

//import { DetailPage } from './DetailPage'
//import { Cart } from './Cart.js';

const Detail = lazy(() => import('./routes/Detail.js'))
const Cart = lazy(() => import('./routes/Cart.js'))

function App() {

  useEffect(() => {
    if (localStorage.getItem('watched').length == 0) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, [])

  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(0);
  let [stock, setStock] = useState([10, 11, 12]);
  let navigate = useNavigate();

  useQuery()


  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}> Home </Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail/1') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/Cart') }}>Cart</Nav.Link>
          </Nav>
          <Nav className="me-auto"> 안녕하세요. Mr.Kim </Nav>

        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/" element={
            <div>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {
                    shoes.map(function (a, i) {
                      return (
                        <div className="col-md-4" onClick={() => { navigate('/detail/' + i); }}>
                          <img src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"} width="80%" />
                          <h4>{shoes[i].title}</h4>
                          <p>{shoes[i].price}</p>
                        </div>
                      )
                    })
                  }
                </div>
                <button onClick={() => {
                  setCount(count + 1);
                  if (count == 0) {
                    axios.get("https://codingapple1.github.io/shop/data2.json").then((result) => {
                      let arr = [...shoes];
                      let newArr = arr.concat(result.data);
                      setShoes(newArr);
                    })
                      .catch(() => {
                        console.log(' ajax 실패 ');
                      })
                  } else if (count == 1) {
                    axios.get("https://codingapple1.github.io/shop/data3.json").then((result) => {
                      let arr = [...shoes];
                      let newArr = arr.concat(result.data);
                      setShoes(newArr);
                    })
                      .catch(() => {
                        console.log(' ajax 실패 ');
                      })
                  }
                  else {
                    alert("더 이상 상품이 없습니");
                  }
                }
                }>더보기</button>
              </div>
            </div>
          } />
          <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </Suspense>
    </div >
  );
}

export default App;