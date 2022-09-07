import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from 'styled-components';



function DetailPage(props) {

  let [text, setText] = useState('');

  useEffect(()=>{
    if (isNaN(text) == true){
      alert('숫자를 입력해주세요')
    }
  }, [text])



  let { id } = useParams();
  let findShoes = props.shoes.find((x) => x.id == id);
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
        <input onChange={(e)=>{setText(e.target.value)}}></input>
      </div>
    </div>
  )
}

function Warning() {
  return (
    <div className="warning">
      2초 내로 구매시 할인
    </div>
  )
}
export { DetailPage }