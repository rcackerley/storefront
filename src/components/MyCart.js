import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';
let MyCart = ({cart}) =>
  <div>
    <Navbar />
    <div className="content-center">
      <h2>My Cart</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>description</th>
            <th>quantity</th>
            <th>price</th>
          </tr>
          {cart.length > 0 && cart.map(product =>(
            <tr>
              <td><img src={`${product.img}`}/></td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

let mapStateToProps = state => ({cart: state.cart});
let MyCartContainer = connect(mapStateToProps)(MyCart);
export default MyCartContainer
