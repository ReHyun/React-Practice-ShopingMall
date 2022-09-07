/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { data } from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { DetailPage } from './DetailPage'
import axios from 'axios'



function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();


  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}> Home </Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail/') }}>Detail</Nav.Link>
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
                      <div className="col-md-4" onClick={()=>{navigate('/detail/'+i)}}>
                        <img src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"} width="80%" />
                        <h4>{shoes[i].title}</h4>
                        <p>{shoes[i].price}</p>
                      </div>
                    )
                  })
                }
              </div>
              <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json').then((result)=>{
                  let arr = [...shoes];
                  let newArr = arr.concat(result.data);
                  setShoes(newArr);
              })
                .catch(()=>{
                  console.log(' ajax 실패 ')
                })

              }}>Button</button>
            </div>
          </div>
        } />

        <Route path="/detail/:id" element={<DetailPage shoes={shoes}></DetailPage>} />

      </Routes>

    </div>
  );
}




export default App;