import { Alert } from "bootstrap";
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import styled from 'styled-components';



function DetailPage(props) {
  let [text, setText] = useState('');
  let { id } = useParams();
  let findShoes = props.shoes.find((x) => x.id == id);
  let [tab, setTab] = useState(0);

  useEffect(() => {
    if (isNaN(text) == true) {
      alert('숫자를 입력해주세요')
    }
  }, [text])


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="TAB0" onClick={()=>{setTab(0)}}>TAB0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="TAB1" onClick={()=>{setTab(1)}}>TAB1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="TAB2" onClick={()=>{setTab(2)}}>TAB2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}></TabContent>

    </div>
  )
}


function TabContent({tab}){
  if (tab == 0){
    return(
    <div>내용0</div> 
    )  
  } else if(tab == 1){
    return(
      <div>내용1</div>
    )
  } else{
    return(
      <div>내용2</div>
    )
  }
}



export { DetailPage }