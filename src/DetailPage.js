import { useParams } from "react-router-dom"
import styled from 'styled-components'

let YellowBtn = styled.button`
  background : ${props => props.bg};
  color : black;
  padding : 10px;
`



function DetailPage(props) {

  let { id } = useParams();
  let findShoes = props.shoes.find((x) => x.id == id);

  return (
    <div className="container">
      <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>

      <div>
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
      </div>
    </div>

  )
}


export { DetailPage }