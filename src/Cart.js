import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'



function Cart() {

    let user = useSelector((state) => { return state.user })
    console.log(user);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(function (a, i) {
                            return (
                                <tr>
                                    <td>1</td>
                                    <td>{user[i].name}</td>
                                    <td>{user[i].count}</td>
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