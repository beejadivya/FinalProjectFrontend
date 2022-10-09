import React from 'react';
import Gallery from './Gallery';
import Header1 from './Header1';
import CartList from './CartList';
// import '../Css/Home.css';
import { useState } from 'react';
import bangle1 from './images/bangle1.png';import bangle2 from './images/bangle2.png';import bangle3 from './images/bangle3.png';
import candle1 from './images/candle1.png';import candle2 from './images/candle2.png';import candle3 from './images/candle3.png';
import handbag1 from './images/handbag1.png';import handbag2 from './images/handbag2.png'; import handbag3 from './images/handbag3.png';
import pillow1 from './images/pillow1.png';import pillow2 from './images/pillow2.png';import pillow3 from './images/pillow3.png';
import toy1 from './images/toy1.png';import toy2 from './images/toy2.png';import toy3 from './images/toy3.png';



function Homes() {

    const [gallery, setGallery] = useState([
      {
        url: bangle1,
        name: 'Nature',
        category: 'Nature',
        seller: 'Marco Grassi',
        price: 1999
      },
      {
        url: bangle2,
        name: 'Mountains',
        category: 'Nature',
        seller: 'Macro Grassi',
        price: 2599
      },
      {
        url: bangle3,
        name: 'Snow Mountains',
        category: 'Nature',
        seller: 'Macro Grassi',
        price: 50000
      },
      {
        url: candle1,
        name: 'Dessert',
        category: 'Nature',
        seller: 'Macro Grassi',
        price: 4000
      },
      {
        url: candle2,
        name: '',
        category: 'Watches',
        seller: 'Watch Ltd',
        price: 2000
      },
      {
        url: candle3,
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },
      {
        url: handbag1,
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },
      {
        url: handbag2,
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },
      {
        url: handbag3,
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },
      {
        url: pillow1,
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },
      {
        url: pillow2,
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },
      {
        url: pillow3,
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },
      {
        url: toy1,
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },
      {
        url: toy2,
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },
      {
        url: toy3,
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },

    ])
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)
  
    const addToCart = (data) => {
      setCart([...cart, { ...data, quantity: 1 }])
    }
  
    const handleShow = (value) => {
      setShowCart(value)
    }
  
    return (
      <div>
        <Header1 count={cart.length}
          handleShow={handleShow} ></Header1>
  
        {
          showCart ?
            <CartList cart={cart} ></CartList> :
            <Gallery gallery={gallery} addToCart={addToCart} ></Gallery>
        }
  
  
      </div>
    );
  }
  
  export default Homes;