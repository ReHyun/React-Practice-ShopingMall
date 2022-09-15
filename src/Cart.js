import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeAge} from "./userSlice.js"
import { IncreaseCount} from "./Store.js"


function Cart() {

    let user = useSelector((state) => { return state.user })
    let cart = useSelector((state)=>{ return state.cart })
    let dispatch = useDispatch()

    return (
        <div>
            <h6>{user.name}의 {user.age}장바구니</h6>
            <button onClick={()=>{
                dispatch(changeAge(100))
            }}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(function (a, i) {
                            return (
                                <tr key={i}>
                                    <td>1</td>
                                    <td>{cart[i].name}</td>
                                    <td>{cart[i].count}</td>
                                    <button onClick={()=>{
                                        dispatch(IncreaseCount(i))
                                    }}> + </button>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </Table>




        </div>
    )
}






export { Cart }