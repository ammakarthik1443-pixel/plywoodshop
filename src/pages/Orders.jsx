import React from 'react';

export default function Orders() {
  const orders =
    JSON.parse(localStorage.getItem('orders')) || [];

  return (
    <div style={{padding:'120px 5%'}}>
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <h3>No Orders Yet</h3>
      ) : (
        orders.map((item,index)=>(
          <div
            key={index}
            style={{
              border:'1px solid #ddd',
              padding:'20px',
              marginBottom:'20px',
              borderRadius:'10px'
            }}
          >
            <h3>{item.name}</h3>
            <p>Quantity : {item.quantity}</p>
            <p>Total : ₹{item.price * item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}