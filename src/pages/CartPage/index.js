import Table from 'react-bootstrap/Table';
import {useSelector} from 'react-redux';

function CartPage(){
  let userName = useSelector((state)=>{
    return state.userName;
  })

  let productStock = useSelector((state)=>{
    return state.productStock;
  })

  let cartData = useSelector((state)=>{
    return state.cartData;
  })

  console.log(userName);
  console.log(productStock);

  return (
    <div>
     <Table>
      <thead>
        <tr>
        <th>#</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>{productStock[0]}</td>
          <td>단추</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Nike</td>
          <td>{productStock[1]}</td>
          <td>단추</td>
        </tr>

      </tbody>
      </Table>
    </div>
  )
}

export default CartPage;