import React, { useState } from 'react';
import { useCart } from './CartContext';
import '../Styles/cartPage.css';
import Footer from '../Footer/Footer';
import {loadStripe} from '@stripe/stripe-js'
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
  const { cart, removeFromCart, calculateTotal,clearCart } = useCart();
  console.log(cart)
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate=useNavigate();
  // const handleIncrement = (item) => {
  //   incrementQuantity(item);
  // };

  // const handleDecrement = (item) => {
  //   decrementQuantity(item);
  // };
  if(orderPlaced){
    console.log('abc')
  }

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleit=()=>{
    window.location.href = '/';
  }

  const handleBuyNow = async() => {

    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000);
    setTimeout(() => {
      setOrderPlaced(false);
      clearCart(); 
    }, 4000);

const stripe=await loadStripe("pk_test_51OE9GCSBTTGVG4VXvYTZdAZfdsDcKNilDSscK21WRnhtvPpCARFz5v1KYzNXPyzRJNTiAWuFOfFIQ9jMwuCPTpwa00LgTsR5Sm")

const body={
   products:cart
}
const headers={
"Content-Type":"application/json"
}
const response = await fetch("https://asdf-6hl6.onrender.com/api/create-checkout-session",{
  method:"POST",
  headers:headers,
  body:JSON.stringify(body)
})

// const session = await response.json();
 
// const result=stripe.redirectToCheckout({
//   sessionId:session.id
// })

if (response.ok) {
  const session = await response.json();
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    console.log(result.error);
  } else {
    navigate("/");
    alert("Payment successful! Your order has been placed.");
  }
} else {
  console.error("Failed to create checkout session");
}


  };

  return (
    <div className='cartHead'>
      <h2 style={{ fontSize: '30pt', textAlign: 'left',marginLeft:'90px', fontWeight: '700' }}>Shopping Cart</h2>

      {cart.length === 0 ? (
        <>
          
          <img className='empty' src='https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg' alt='' />
          <p style={{ textAlign: 'center', fontWeight: '500', fontSize: '14pt' }}>Your cart is empty. Keep shopping to find a course!</p><button className='bestSellerButton2'style={{width:'250px',fontSize:'14pt',marginLeft:'650px'}} onClick={handleit}>Keep shopping</button>
        </>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <div className="cartmain">
                  <div className="left">
                    <img className="cartimg" src={item.bollywoodimg} alt="" />
                  </div>
                  <div className="right">
                    <p style={{ wordWrap: 'break-word',fontWeight:'700',width:'400px' }}>{item.name}</p>{' '}
                    <p style={{fontSize:'12pt',marginTop:'-10px',width:'400px'}}>By {item.author}</p>
                    <p style={{fontSize:'12pt',marginTop:'-10px',color:'yellow',width:'500px'}}><span style={{color:'black',fontWeight:'700'}}>{item.rating}</span> {item.rating_stars}<span style={{color:'grey',fontWeight:'100'}}> (10,112,234 ratings)</span></p>
                    <p style={{ color: 'purple', fontWeight: '700',fontSize:'20pt',position:'relative',top:'-120px',left:'550px'}}>₹ {item.price} </p>
                    <button onClick={() => handleRemove(item)} style={{backgroundColor:'white',color:'purple',marginLeft:'430px',fontSize:'12pt',position:'relative',top:'-175px'}}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='cartInMain'>
          <p className="carttotal">Total Amount: </p>
          <p className="carttotal">₹ {calculateTotal(cart)}</p>
          <p style={{marginLeft:'60px',marginTop:'-20px',color:'grey'}}>Flat 80% off</p>
          <button style={{width:'300px'}} className='bestSellerButton2' onClick={handleBuyNow}>
            Buy Now
          </button></div>
        </>
      )}

      {/* {orderPlaced && (
        <>
        <div className="popup-message">
          <p> ✅ Order placed!</p>
          <div className="green-line"></div>
        </div>
         </>
      )} */}
<div className='day'>
      <Footer /></div>
    </div>
  );
};

export default CartPage;
