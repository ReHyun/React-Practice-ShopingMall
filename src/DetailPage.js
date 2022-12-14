import { Alert } from "bootstrap";
import Nav from 'react-bootstrap/Nav';
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import styled from 'styled-components';
import { Container } from "react-bootstrap";
import { cart, AddCart } from "./Store.js"
import { data } from "./data.js"
import { useDispatch, useSelector } from "react-redux";



function DetailPage(props) {
  let dispatch = useDispatch();
  let [text, setText] = useState('');
  let { id } = useParams();
  let findShoes = props.shoes.find((x) => x.id == id);
  let [tab, setTab] = useState(0);
  let [animation, setAnimation] = useState('');
  let cart = useSelector((state) => { return state.cart })


  useEffect(() => {
    if (isNaN(text) == true) {
      alert('숫자를 입력해주세요')
    }
  }, [text])

  useEffect(() => {
    setTimeout(() => { setAnimation('end') }, 100)
    return (
      setAnimation('')
    )
  }, [])

  useEffect(() => {
    let newArr = JSON.parse(localStorage.getItem('watched'));
    newArr.push(findShoes.id);
    let SetArr = [...new Set(newArr)];
    localStorage.setItem('watched', JSON.stringify(SetArr));

  }, [])


  return (
    <div className={`container start ${animation}`}>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}</p>
          <button className="btn btn-danger" onClick={() => {

            let copyCart = {
              name: data[1].title,
              count: 0
            };

            dispatch(AddCart(copyCart))
          }}>주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="TAB0" onClick={() => { setTab(0) }}>TAB0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="TAB1" onClick={() => { setTab(1) }}>TAB1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="TAB2" onClick={() => { setTab(2) }}>TAB2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}></TabContent>

    </div>
  )
}


function TabContent({ tab }) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => { setFade('end') }, 100);
    return (
      () => { setFade('') }
    )
  }, [tab])

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  )
}



export { DetailPage }