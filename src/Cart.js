import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeAge} from "./userSlice.js"
import { DecreaseCount, IncreaseCount} from "./Store.js"


function Cart() {

    let user = useSelector((state) => { return state.user })
    let cart = useSelector((state)=>{ return state.cart })
    let dispatch = useDispatch()

    return (
        <div>
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
                                    <td>{cart[i].id}</td>
                                    <td>{cart[i].name}</td>
                                    <td>{cart[i].count}</td>
                                    <button onClick={()=>{
                                        dispatch(IncreaseCount(cart[i].id))
                                    }}> + </button>
                                    <button onClick={()=>{
                                        dispatch(DecreaseCount(cart[i].id))
                                    }}> - </button>
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