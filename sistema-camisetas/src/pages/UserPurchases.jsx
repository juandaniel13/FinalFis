import React from 'react'
import "./css/UserPurchases.css"
import UserOptions from '../Components/UserOptions/UserOptions'
import Order from '../Components/Order/Order'

export default function UserPurchases() {
  return (
    <div className='user-purchases'>
      <UserOptions/>
      <div className='order-history'>
        <h2>Histórico de pedidos</h2>
        <div className='order-history-content'>
          <Order/>
          <Order/>
          <Order/>
          <Order/>
          <Order/>
          <Order/>
          <Order/>
          <Order/>
        </div>
      </div>
    </div>
  )
}
