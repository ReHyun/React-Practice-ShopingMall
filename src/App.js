/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { data } from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { DetailPage } from './DetailPage'


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}> Home </Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/EventPage') }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg"></div>

            <div className="container">
              <div className="row">
                {
                  shoes.map(function (a, i) {
                    return (
                      <div className="col-md-4">
                        <img src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"} width="80%" />
                        <h4>{shoes[i].title}</h4>
                        <p>{shoes[i].price}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        } />
        <Route path="/detail" element={<DetailPage></DetailPage>} />
        <Route path="/EventPage" element={<EventPage></EventPage>}>
          <Route path="One" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="Two" element={<div>생일 기념 쿠폰 받기</div>}></Route>
        </Route>
        <Route path="*" element={<div> 404 </div>} />
      </Routes>


    </div>
  );
}
function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
