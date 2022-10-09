import { useEffect, useState } from 'react';
// import '../Css/CartStyle.css';
// import '../Css/Home.css';

function CartList({ cart }) {
    const submitHandler = e =>{
        e.preventDefault()
        window.location.href='/payment';
    }

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='cart'>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <img src={cartItem.url} width={40} />
                            <span> {cartItem.name} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }

            <br></br><p> Total  <span></span>
                {
                     
                     CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)

                }
            </p>
            <br></br><div className='btn'>
            <button onClick={submitHandler}>Check Out</button>
            </div>
        </div >
    )
}

export default CartList