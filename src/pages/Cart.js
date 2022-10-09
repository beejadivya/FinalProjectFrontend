// import React, { useState, useEffect } from "react";
// import { Outlet, Link, useNavigate } from "react-router-dom";
// import './Product.css';
// import axios from "axios";



// const Cart = () => {
//     const navigate=useNavigate()
//     const [cartitems, setcartitems] = useState([]);

//     function getCookie(cname) {
//         var name = cname + "=";
//         var ca = document.cookie.split(';');
//         for(var i=0; i<ca.length; i++) {
//            var c = ca[i];
//            while (c.charAt(0)==' ') c = c.substring(1);
//            if(c.indexOf(name) == 0)
//               return c.substring(name.length,c.length);
//         }
//         return "";
//    }
    
  
//     useEffect(() => {
//       fetch("http://localhost:8080/api/auth/cart")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             console.log('called get items')
//             console.log(result)
//             setcartitems(result);
//           }
//         )
//     }, [])

//     let totalValue=0;
//     cartitems.forEach(
//         (cart)=>
//         (totalValue=totalValue+(cart.price))
// );
// return(
//     <div>
//         {getCookie("accessToken")&&
//          <div className="CartPage">
//          <div className="LeftContainer">
//          <div className="CartItems">
//              {cartitems &&
//                cartitems.map((cart) => {
//               return(
//                 <div key={cart.id} className="CartCard">
//                 <img
//                   src={cart.image}
//                   className="productImage"
//                   width={150} height={150}  />

//                 {cart.product_name}
//                 -  Rs.{(cart.price)}
//                 </div>
//               );
//             })}
//             </div>
//             </div>
//             <div classNmae="rightContainer">
//             <div className="CartItems">
//             {cartitems &&
//                cartitems.map((cart) => {
//                    return(
//                        <div key={cart.id}>
//                        Rs.{(cart.price)}
//                        </div>
//                    );
//                 })}

//             <h4>Total Amount</h4>
//             <div>Rs.{totalValue}</div>
//             <Link to="/Checkout"><button>Checkout</button></Link>
//             </div>
//             </div>
//             </div>
//         }
//         {
//             !(getCookie("accessToken"))&&
//             navigate('/Cart')
//         }
//                      </div>                  
// );
// };
// export default Cart;

import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
// import './Product.css';
import axios from "axios";



const Cart = ({plants}) => {
  const location = useLocation()
  const { from } = location.state
    const navigate=useNavigate()
    const [cartitems, setcartitems] = useState([]);
    console.log(plants);

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
           var c = ca[i];
           while (c.charAt(0)==' ') c = c.substring(1);
           if(c.indexOf(name) == 0)
              return c.substring(name.length,c.length);
        }
        return "";
   }
   const saveProduct = (data) => {

    axios.post("http://localhost:8080/api/auth/add_product",data)

      .then((response) => {

        console.log(response)

      })

      .catch((error) => {

        console.log(error)

      })

  }
    

return(
    <div>
        {getCookie("accessToken")&&
        
         <div className="CartPage">
         
         <div className="LeftContainer">
         <div className="CartItems">
         <h1>Cart</h1>
            <h3>Product : {from.product_name}</h3>
             <img id="cartimage" src={from.image} />
             <h4>Quantity : {from.quantity}</h4>
             <h4>Total Amount</h4>
            <div>Rs.{from.price}</div>
            <Link to="/checkout"><button>Confirm payment</button></Link>
            </div>
            </div>
  

            
            </div>
    
        }
        {
            !(getCookie("accessToken"))&&
            navigate('/cart')
        }
                     </div>                  
);
};
export default Cart;